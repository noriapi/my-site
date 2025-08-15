import { type PopoverContentProps } from "@ark-ui/solid";
import { createSignal, Show } from "solid-js";
import { Portal } from "solid-js/web";

import MenuIcon from "~icons/lucide/menu";
import XIcon from "~icons/lucide/x";

import { Button } from "./button";
import { Popover } from "./popover";

type MobileNavbarProps = PopoverContentProps;

export function MobileNavbar(props: MobileNavbarProps) {
  const [open, setOpen] = createSignal(false);

  return (
    <Popover.Root
      portalled
      open={open()}
      onOpenChange={(e) => setOpen(e.open)}
      positioning={{
        placement: "bottom",
        overflowPadding: 0,
        offset: { mainAxis: 12 },
      }}
    >
      <Popover.Trigger
        asChild={(btn) => (
          <Button height="100%" variant="ghost" borderRadius="0" {...btn} />
        )}
      >
        <Popover.Indicator>
          <Show when={open()} fallback={<MenuIcon />}>
            <XIcon />
          </Show>
        </Popover.Indicator>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content
            _open={{ animation: "backdrop-in" }}
            _closed={{ animation: "backdrop-out" }}
            boxShadow="none"
            borderRadius="none"
            bg="bg.canvas"
            maxW="unset"
            px={{ base: "4", md: "8" }}
            width="var(--available-width)"
            height="var(--available-height)"
            alignItems="center"
            py="6"
            {...props}
          />
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
}
