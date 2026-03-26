import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { NAV_ITEMS, SITE } from "@/lib/constants"
import { Button } from "@/components/ui/button"

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex size-10 items-center justify-center rounded-lg text-foreground/80 transition-colors hover:bg-muted"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto bg-background">
          <nav className="mx-auto max-w-7xl px-4 py-6 sm:px-6" aria-label="Mobile navigation">
            <ul className="space-y-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() =>
                          setExpanded(expanded === item.label ? null : item.label)
                        }
                        className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-muted"
                      >
                        {item.label}
                        <ChevronDown
                          className={`size-4 transition-transform ${
                            expanded === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {expanded === item.label && (
                        <ul className="ml-4 space-y-1 border-l-2 border-border pl-4">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <a
                                href={child.href}
                                className="block rounded-lg px-3 py-2 text-sm text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
                                onClick={() => setOpen(false)}
                              >
                                {child.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block rounded-lg px-3 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-muted"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t pt-6">
              <a href={SITE.ticketsUrl} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full" size="lg">
                  Get Tickets
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
