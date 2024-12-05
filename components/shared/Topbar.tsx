import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";

function Topbar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/rivibe-logo.svg" alt="Rivibe Logo" width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Rivibe</p>
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/notifications" className="relative">
          <Image
            src="/assets/notifications.svg"
            alt="Notifications"
            width={24}
            height={24}
            className="object-contain"
          />
          <span className="absolute top-0 right-0 bg-primary-500 text-xs text-white rounded-full px-1">
            3 {/* Placeholder for notification count */}
          </span>
        </Link>

        <SignedIn>
          <SignOutButton>
            <div className="flex cursor-pointer">
              <Image
                src="/assets/logout.svg"
                alt="Logout"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
          </SignOutButton>
        </SignedIn>

        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
      </div>
    </nav>
  );
}

export default Topbar;
  );
}

export default Topbar;
