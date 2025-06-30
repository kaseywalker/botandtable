import { IconCloudWithRobot } from "./ui/interactive-icon-cloud-with-robot"

const aiCommunicationSlugs = [
  // Email/Gmail
  "gmail", "gmail", "gmail",
  // Phone/SMS
  "whatsapp", "whatsapp", "whatsapp", "whatsapp", "whatsapp",
  "skype", "ringcentral",
  // Chat/Message
  "messages", "messages", "messages", "messages",
  // Social
  "instagram", "facebook",
  // AI
  "openai", "huggingface",
  // Cloud
  "amazonaws", "googlecloud", "microsoftazure"
]

export function AICommunicationIconCloudWithRobot() {
  return (
    <div className="relative flex size-full max-w-2xl items-center justify-center overflow-hidden rounded-lg px-8 pb-8 pt-8">
      <IconCloudWithRobot iconSlugs={aiCommunicationSlugs} />
    </div>
  )
} 