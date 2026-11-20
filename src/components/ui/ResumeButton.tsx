import { FiDownload } from "react-icons/fi";
import { profile } from "@/data/profile";
import { LinkButton } from "./Button";

export function ResumeButton({
  variant = "primary",
  className,
  label = "Download Resume",
}: {
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  label?: string;
}) {
  return (
    <LinkButton
      href={profile.resume}
      download={profile.resumeFileName}
      variant={variant}
      className={className}
      aria-label={`${label} (PDF)`}
    >
      <FiDownload aria-hidden className="size-4" />
      {label}
    </LinkButton>
  );
}
