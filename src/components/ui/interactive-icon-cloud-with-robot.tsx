"use client"

import { useEffect, useMemo, useState } from "react"
import { useTheme } from "next-themes"
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud"

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
      position: "relative",
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
}

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510"
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff"
  const minContrastRatio = theme === "dark" ? 2 : 1.2
  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  })
}

export const renderRobotIcon = (theme: string) => {
  const bgHex = theme === "light" ? "#ffffff" : "#1e293b"
  return (
    <div
      style={{
        background: bgHex,
        borderRadius: "50%",
        width: "240px",
        height: "240px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        boxShadow: theme === "light"
          ? "0 10px 30px rgba(0,0,0,0.1)"
          : "0 10px 30px rgba(0,0,0,0.3)",
        border: theme === "light"
          ? "6px solid #e2e8f0"
          : "6px solid #334155",
        position: "relative",
        zIndex: 10,
      }}
    >
      <img
        src="/assets/bot-table-robot.svg"
        alt="Bot & Table Robot"
        style={{
          width: "160px",
          height: "160px",
          objectFit: "contain",
        }}
      />
    </div>
  )
}

export type DynamicCloudProps = {
  iconSlugs: string[]
}

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>

export function IconCloudWithRobot({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null)
  const { theme } = useTheme()
  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData)
  }, [iconSlugs])
  const renderedIcons = useMemo(() => {
    if (!data) return null
    return iconSlugs.map((slug) => {
      if (slug === "skype") {
        return (
          <svg
            key="custom-chat-icon"
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "inline-block", verticalAlign: "middle" }}
          >
            <rect width="24" height="24" rx="12" fill={theme === "dark" ? "#232629" : "#f3f2ef"} />
            <path d="M7 10.5C7 9.11929 8.11929 8 9.5 8H14.5C15.8807 8 17 9.11929 17 10.5V13.5C17 14.8807 15.8807 16 14.5 16H10.4142C10.149 16 9.89464 16.1054 9.70711 16.2929L8.35355 17.6464C8.15829 17.8417 7.84171 17.8417 7.64645 17.6464C7.45118 17.4512 7.45118 17.1346 7.64645 16.9393L8.29289 16.2929C8.10536 16.1054 8 15.851 8 15.5858V10.5Z" stroke="#3b82f6" strokeWidth="1.5"/>
          </svg>
        )
      }
      if (slug === "google-reviews") {
        return (
          <svg
            key="google-reviews-star"
            width="42"
            height="42"
            viewBox="0 0 20 20"
            fill="#fbbf24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "inline-block", verticalAlign: "middle" }}
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/>
          </svg>
        )
      }
      const icon = data.simpleIcons[slug]
      return renderCustomIcon(icon, theme || "light")
    })
  }, [data, theme, iconSlugs])
  return (
    <div style={{ position: "relative", width: "100%", height: "500px" }}>
      {/* @ts-ignore */}
      <Cloud {...cloudProps}>
        <>{renderedIcons}</>
      </Cloud>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 20,
        }}
      >
        {renderRobotIcon(theme || "light")}
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "280px",
          height: "280px",
          border: "4px solid #3b82f6",
          borderRadius: "50%",
          opacity: 0.6,
          animation: "pulse 2s infinite",
          zIndex: 5,
        }}
      />
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.3;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  )
} 