import { IconCloudWithRobot } from "./ui/interactive-icon-cloud-with-robot"

const aiCommunicationSlugs = [
  // Email/Gmail
  "gmail", "gmail", "gmail",
  // Phone/SMS
  "whatsapp", "whatsapp", "whatsapp", "whatsapp", "whatsapp",
  // Social
  "instagram", "facebook",
  // AI
  "openai", "huggingface",
  // Cloud
  "googlecloud"
]

export function AICommunicationIconCloudWithRobot() {
  return (
    <div className="relative flex size-full max-w-2xl items-center justify-center overflow-hidden rounded-lg px-8 pb-8 pt-8">
      <IconCloudWithRobot iconSlugs={aiCommunicationSlugs} />
    </div>
  )
} 