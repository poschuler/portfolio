import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import React from "react";
import { cn } from "~/lib/utils";

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

//const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

const CollapsibleContent = React.forwardRef<
    React.ElementRef<typeof CollapsiblePrimitive.CollapsibleContent>,
    React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleContent>
>(({ className, ...props }, ref) => (
    <CollapsiblePrimitive.CollapsibleContent
        ref={ref}
        className={cn('overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up', className)}
        {...props}
    />
));

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
