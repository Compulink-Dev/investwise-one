"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Search, X, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type SearchInputSize = "sm" | "md" | "lg";

export interface SearchInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "size" | "onChange"
  > {
  /** Controlled value */
  value?: string;
  /** Uncontrolled initial value */
  defaultValue?: string;
  /** Fires whenever the input value changes */
  onChange?: (value: string) => void;
  /** Fires after debounce OR when user presses Enter / clicks search */
  onSearch?: (value: string) => void;
  /** Optional clear handler */
  onClear?: () => void;
  /** Debounce milliseconds for onSearch (0 = disabled) */
  debounce?: number;
  /** Show a loading spinner */
  loading?: boolean;
  /** Visual size */
  size?: SearchInputSize;
  /** Optional left adornment icon override */
  icon?: React.ReactNode;
}

const sizeClasses: Record<SearchInputSize, string> = {
  sm: "h-9 text-sm pl-9 pr-9",
  md: "h-10 text-base pl-10 pr-10",
  lg: "h-12 text-base pl-11 pr-11",
};

/**
 * A polished, accessible search input built with shadcn/ui and lucide-react.
 * - Supports controlled & uncontrolled usage
 * - Debounced onSearch
 * - Keyboard shortcut: Ctrl/Cmd + K to focus
 * - Clear & loading affordances
 */
const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      value,
      defaultValue,
      onChange,
      onSearch,
      onClear,
      placeholder = "Search…",
      debounce = 0,
      loading = false,
      size = "md",
      icon,
      className,
      autoFocus,
      ...rest
    },
    ref
  ) => {
    const innerRef = React.useRef<HTMLInputElement>(null);
    React.useImperativeHandle(ref, () => innerRef.current as HTMLInputElement);

    const isControlled = value !== undefined;
    const [internal, setInternal] = React.useState<string>(defaultValue ?? "");
    const currentValue = isControlled ? value! : internal;

    // Debounced search
    React.useEffect(() => {
      if (!onSearch) return;
      if (!debounce) return;
      const id = setTimeout(() => onSearch(currentValue), debounce);
      return () => clearTimeout(id);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentValue, debounce]);

    // Keyboard shortcut: Ctrl/Cmd + K to focus
    React.useEffect(() => {
      const handler = (e: KeyboardEvent) => {
        const isMac = navigator.platform.toUpperCase().includes("MAC");
        if ((isMac ? e.metaKey : e.ctrlKey) && e.key.toLowerCase() === "k") {
          e.preventDefault();
          innerRef.current?.focus();
        }
      };
      window.addEventListener("keydown", handler);
      return () => window.removeEventListener("keydown", handler);
    }, []);

    const commitSearch = React.useCallback(() => {
      onSearch?.(currentValue);
    }, [currentValue, onSearch]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const next = e.target.value;
      if (!isControlled) setInternal(next);
      onChange?.(next);
    };

    const clear = () => {
      if (!isControlled) setInternal("");
      onChange?.("");
      onClear?.();
      // After clearing, also notify searchers immediately
      if (debounce === 0) onSearch?.("");
      innerRef.current?.focus();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") commitSearch();
      if (e.key === "Escape" && currentValue) clear();
    };

    return (
      <div className={cn("relative w-full", className)}>
        {/* Left icon */}
        <motion.div
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.15 }}
          className={cn(
            "pointer-events-none absolute inset-y-0 left-2 flex items-center",
            size === "sm" && "left-2",
            size === "md" && "left-2.5",
            size === "lg" && "left-3"
          )}
        >
          <div aria-hidden className="flex items-center">
            {icon ?? <Search className="h-4 w-4" />}
          </div>
        </motion.div>

        {/* The input */}
        <Input
          ref={innerRef}
          type="search"
          role="searchbox"
          autoFocus={autoFocus}
          value={currentValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={cn(
            "pr-20 pl-9", // base padding (adjusted by size below)
            sizeClasses[size],
            "rounded-2xl",
            "focus-visible:ring-2 focus-visible:ring-offset-0"
          )}
          aria-label={placeholder}
          {...rest}
        />

        {/* Right-side actions */}
        <div className="absolute inset-y-0 right-1 flex items-center gap-1">
          {currentValue && !loading && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className={cn(
                "h-8 w-8 rounded-xl",
                size === "lg" && "h-9 w-9",
                size === "sm" && "h-7 w-7"
              )}
              onClick={clear}
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </Button>
          )}

          {loading ? (
            <div className="px-2" aria-live="polite" aria-busy>
              <Loader2 className="h-4 w-4 animate-spin" />
            </div>
          ) : (
            <Button
              type="button"
              variant="ghost"
              className={cn(
                "mr-1 rounded-xl",
                size === "sm" && "h-8",
                size === "md" && "h-9",
                size === "lg" && "h-11"
              )}
              onClick={commitSearch}
              aria-label="Submit search"
            >
              <span className="sr-only">Search</span>
              <Search className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";

export default SearchInput;

/*
Usage:

import SearchInput from "@/components/SearchInput";

export default function Demo() {
  const [q, setQ] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <SearchInput
        value={q}
        onChange={setQ}
        onSearch={(v) => {
          setLoading(true);
          // do something async then setLoading(false)
          console.log("search:", v);
          setTimeout(() => setLoading(false), 600);
        }}
        loading={loading}
        placeholder="Search docs, people, anything…"
        debounce={300}
        size="md"
        autoFocus
      />
      <p className="text-sm text-muted-foreground">Tip: Press Ctrl/Cmd + K to focus.</p>
    </div>
  );
}
*/
