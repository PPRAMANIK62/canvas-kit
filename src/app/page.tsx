"use client";

import { motion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

// ////////////////////////////// Icons ////////////////////////////// //
interface IconProps {
  size?: number;
  className?: string;
}
export const Circle = ({ size = 24, className = "" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
};
export const Download = ({ size = 24, className = "" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
};
export const Eraser = ({ size = 24, className = "" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" />
      <path d="M22 21H7" />
      <path d="m5 11 9 9" />
    </svg>
  );
};
export const Layers = ({ size = 24, className = "" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
};
export const Paintbrush = ({ size = 24, className = "" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
      <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
      <path d="M14.5 17.5 4.5 15" />
    </svg>
  );
};
export const Palette = ({ size = 24, className = "" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="13.5" cy="6.5" r=".5" />
      <circle cx="17.5" cy="10.5" r=".5" />
      <circle cx="8.5" cy="7.5" r=".5" />
      <circle cx="6.5" cy="12.5" r=".5" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
};
export const Settings = ({ size = 24, className = "" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
};
export const Square = ({ size = 24, className = "" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    </svg>
  );
};
export const Trash2 = ({ size = 24, className = "" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </svg>
  );
};
export const Eye = ({ size = 24, className = "" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
};
export const EyeOff = ({ size = 24, className = "" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  );
};
export const Plus = ({ size = 24, className = "" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
};
export const X = ({ size = 24, className = "" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
};
export const ChevronLeft = ({ size = 24, className = "" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
};

// ////////////////////////////// Constants ////////////////////////////// //
const TOOLS = [
  { item: "brush", icon: Paintbrush, shortcut: "B" },
  { item: "eraser", icon: Eraser, shortcut: "E" },
  { item: "rectangle", icon: Square, shortcut: "R" },
  { item: "circle", icon: Circle, shortcut: "C" },
];
const DRAWER_ITEMS = [
  { item: "color", icon: Palette, title: "Color Palette" },
  { item: "settings", icon: Settings, title: "Tool Settings" },
  { item: "layers", icon: Layers, title: "Layers" },
  {
    item: "background",
    icon: Palette,
    title: "Background Color",
    iconProps: { className: "fill-yellow-100" },
  },
];
const COLOR_PALLETE = [
  // Row 1 - Grayscale
  "#000000",
  "#444444",
  "#666666",
  "#888888",
  "#AAAAAA",
  "#CCCCCC",
  "#FFFFFF",
  // Row 2 - Light colors
  "#FFAAAA",
  "#FFFFAA",
  "#AAFFAA",
  "#AAFFFF",
  "#AAAAFF",
  "#FFAAFF",
  "#FFCCAA",
  // Row 3 - Medium colors
  "#FF5555",
  "#FFFF55",
  "#55FF55",
  "#55FFFF",
  "#5555FF",
  "#FF55FF",
  "#FFAA55",
  // Row 4 - Dark colors
  "#FF0000",
  "#FFFF00",
  "#00FF00",
  "#00FFFF",
  "#0000FF",
  "#FF00FF",
  "#FF8800",
];
const COLOR_MODES = ["palette", "custom"];
const LAYERS = [
  {
    id: 1,
    name: "Background",
    visible: true,
    canvas: null,
    context: null,
  },
  {
    id: 2,
    name: "Layer 1",
    visible: true,
    canvas: null,
    context: null,
  },
];

// ////////////////////////////// Types ////////////////////////////// //
type ToolItems = (typeof TOOLS)[number]["item"];
type DrawerItem = (typeof DRAWER_ITEMS)[number]["item"];
type ColorModeItem = (typeof COLOR_MODES)[number];

// ////////////////////////////// Components ////////////////////////////// //
const Separator = () => {
  return <div className="my-2 hidden h-px w-full bg-gray-200 md:block" />;
};

// ////////////////////////////// Drawer ////////////////////////////// //
type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  previousDrawer?: string | null;
  onNavigateBack?: () => void;
};
const Drawer = ({
  isOpen,
  previousDrawer,
  onNavigateBack,
  onClose,
  title,
  children,
}: DrawerProps) => {
  const handleBackClick = () => {
    if (previousDrawer && onNavigateBack) {
      onNavigateBack();
    } else {
      onClose();
    }
  };

  return (
    <motion.div
      className="bg-opacity-25 fixed top-0 right-0 z-50 h-full bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
    >
      <motion.div
        className="absolute top-0 right-0 h-full w-72 bg-gray-800 text-white shadow-lg"
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="border-b border-gray-700 p-4">
          <div className="flex items-center">
            <button
              onClick={handleBackClick}
              className="mr-2 rounded-full p-1 transition-colors hover:bg-gray-700"
            >
              <ChevronLeft size={20} />
            </button>
            <h2 className="text-lg font-medium">{title}</h2>
          </div>
        </div>
        <div
          className="overflow-y-auto p-4"
          style={{ height: "calc(100% - 60px)" }}
        >
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

// ////////////////////////////// Color Palette ////////////////////////////// //
type ColorPaletteProps = {
  color: string;
  setColor: (color: string) => void;
};
const ColorPalette = ({ color, setColor }: ColorPaletteProps) => {
  const [mode, setMode] = useState<ColorModeItem>("palette");
  const [hue, setHue] = useState(0); // Default to red
  const [customColor, setCustomColor] = useState(color);

  // Convert hex to HSV
  const hexToHSV = (hex: string) => {
    // Remove the hash if it exists
    hex = hex.replace(/^#/, "");

    // Parse the hex values
    const r = parseInt(hex.substring(0, 2), 16) / 255;
    const g = parseInt(hex.substring(2, 4), 16) / 255;
    const b = parseInt(hex.substring(4, 6), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;

    // Calculate HSV
    let h = 0;
    const s = max === 0 ? 0 : delta / max;
    const v = max;

    if (delta === 0) {
      h = 0;
    } else if (max === r) {
      h = ((g - b) / delta) % 6;
    } else if (max === g) {
      h = (b - r) / delta + 2;
    } else {
      h = (r - g) / delta + 4;
    }

    h = Math.round(h * 60);
    if (h < 0) h += 360;

    return { h, s, v };
  };
  // Convert HSV to hex
  const hsvToHex = (h: number, s: number, v: number) => {
    const f = (n: number, k = (n + h / 60) % 6) =>
      v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
    const r = Math.round(f(5) * 255);
    const g = Math.round(f(3) * 255);
    const b = Math.round(f(1) * 255);

    return `#${r.toString(16).padStart(2, "0")}${g
      .toString(16)
      .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  };
  // Extract hex without # for the input field
  const hexValue = color.startsWith("#") ? color.substring(1) : color;

  // Handle color selection from palette
  const selectColor = (selectedColor: string) => {
    setColor(selectedColor);
    setCustomColor(selectedColor);

    // Update hue state based on the selected color
    const { h } = hexToHSV(selectedColor);
    setHue(h);
  };

  // Get color picker position from HSV
  const getCirclePosition = (color: string) => {
    const { s, v } = hexToHSV(color);
    return {
      x: `${s * 100}%`,
      y: `${100 - v * 100}%`,
    };
  };
  const circlePos = getCirclePosition(customColor);

  // Handle color picker click/drag
  const handleColorPickerChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));

    const s = x;
    const v = 1 - y;

    const newColor = hsvToHex(hue, s, v);
    setCustomColor(newColor);
    setColor(newColor);
  };

  // Handle hex input change
  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const hexValue = value.startsWith("#") ? value : `#${value}`;

    // Only update if it's a valid hex color or empty
    if (/^#([0-9A-F]{3}){1,2}$/i.test(hexValue) || value.length === 0) {
      setCustomColor(hexValue);
      setColor(hexValue);

      // Update hue state based on the new color
      if (hexValue.length >= 4) {
        // At least #RGB format
        const { h } = hexToHSV(hexValue);
        setHue(h);
      }
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Mode Selector */}
      <div className="flex rounded-full bg-gray-700 p-1">
        {COLOR_MODES.map((modeItem) => (
          <button
            key={modeItem}
            onClick={() => setMode(modeItem)}
            className={`flex-1 rounded-full px-4 py-1.5 text-sm transition-colors ${
              mode === modeItem ? "bg-blue-500 text-white" : "text-gray-300"
            }`}
          >
            {modeItem.charAt(0).toUpperCase() + modeItem.slice(1)}
          </button>
        ))}
      </div>

      {/* Palette Mode */}
      {mode === "palette" && (
        <div className="mt-2 grid grid-cols-7 gap-2">
          {COLOR_PALLETE.map((paletteColor, index) => (
            <button
              key={index}
              className={`aspect-square w-full rounded-full ${
                color === paletteColor
                  ? "ring-2 ring-blue-400 ring-offset-1 ring-offset-gray-800"
                  : ""
              }`}
              style={{ backgroundColor: paletteColor }}
              onClick={() => selectColor(paletteColor)}
              aria-label={`Select color ${paletteColor}`}
            />
          ))}
        </div>
      )}
      {/* Custom Mode */}
      {mode === "custom" && (
        <div className="mt-2">
          {/* Color Picker Area */}
          <div className="mb-3 aspect-video w-full overflow-hidden rounded">
            <div
              className="relative h-full w-full cursor-crosshair"
              style={{
                background: `
                  linear-gradient(to right, #fff, hsl(${hue}, 100%, 50%)),
                  linear-gradient(to bottom, rgba(0,0,0,0), #000)
                `,
                backgroundBlendMode: "multiply",
              }}
              onClick={handleColorPickerChange}
              onMouseMove={(e) => {
                if (e.buttons === 1) {
                  handleColorPickerChange(e);
                }
              }}
            >
              <div
                className="pointer-events-none absolute h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-white"
                style={{
                  top: circlePos.y,
                  left: circlePos.x,
                  boxShadow: "0 0 0 1px rgba(0,0,0,0.3)",
                }}
              />
            </div>
          </div>

          {/* Hue Slider */}
          <div className="mb-4 flex items-center gap-3">
            <div
              className="relative h-4 w-full rounded-full"
              style={{
                background:
                  "linear-gradient(to right, #FF0000, #FFFF00, #00FF00, #00FFFF, #0000FF, #FF00FF, #FF0000)",
              }}
            >
              <input
                type="range"
                min="0"
                max="360"
                value={hue}
                onChange={(e) => {
                  const newHue = Number(e.target.value);
                  setHue(newHue);
                  // Update color based on new hue but keep saturation and value
                  const { s, v } = hexToHSV(customColor);
                  const newColor = hsvToHex(newHue, s, v);
                  setCustomColor(newColor);
                  setColor(newColor);
                }}
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
              />
              <div
                className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-gray-300 bg-white"
                style={{
                  top: "50%",
                  left: `${(hue / 360) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Hex Input */}
          <div>
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm text-gray-300">Hex</span>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-300">
                #
              </span>
              <input
                type="text"
                value={hexValue}
                onChange={handleHexChange}
                className="w-full rounded border border-gray-600 bg-gray-700 px-3 py-2 pl-7 text-white"
                maxLength={6}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ////////////////////////////// Background Color ////////////////////////////// //
type BackgroundColorProps = {
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
};
const BackgroundColor = ({}: BackgroundColorProps) => {
  return <div>Background Color</div>;
};

// ////////////////////////////// Layers ////////////////////////////// //
type LayersPanelProps = {
  layers: string[];
  activeLayer: string;
  setActiveLayer: (layer: string) => void;
  toggleLayerVisibility: (layer: string) => void;
  removeLayer: (layer: string) => void;
  addLayer: () => void;
  backgroundColor: string;
  openBackgroundColorDrawer: () => void;
};
const LayersPanel = ({}: LayersPanelProps) => {
  return <div>Layers</div>;
};

// ////////////////////////////// Tool Settings ////////////////////////////// //
type ToolSettingsProps = {
  tool: string;
  brushSize: number;
  setBrushSize: (size: number) => void;
  eraserSize: number;
  setEraserSize: (size: number) => void;
  opacity: number;
  setOpacity: (opacity: number) => void;
};
const ToolSettings = ({}: ToolSettingsProps) => {
  return <div>Tool Settings</div>;
};

// ////////////////////////////// Canvas ////////////////////////////// //
type CanvasProps = {
  layers: Layer[];
  activeLayerId: number;
  backgroundColor: string;
  tool: ToolItems;
  color: string;
  brushSize: number;
  eraserSize: number;
  opacity: number;
  onLayerChange: (layers: Layer[]) => void;
  cursorStyle: string;
};
const Canvas = ({
  layers,
  activeLayerId,
  backgroundColor,
  tool,
  color,
  brushSize,
  eraserSize,
  opacity,
  onLayerChange,
  cursorStyle,
}: CanvasProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [tempCanvas, setTempCanvas] = useState<HTMLCanvasElement | null>(null);
  const [tempContext, setTempContext] =
    useState<CanvasRenderingContext2D | null>(null);
  const [tempCanvasVersion, setTempCanvasVersion] = useState(0); // To track changes to temp canvas

  // Initialize container size
  useEffect(() => {
    if (containerRef.current) {
      const updateSize = () => {
        const container = containerRef.current;
        if (container) {
          setContainerSize({
            width: container.clientWidth,
            height: container.clientHeight,
          });
        }
      };

      updateSize();
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }
  }, []);

  // Initialize canvas for each layer
  useEffect(() => {
    if (containerSize.width === 0 || containerSize.height === 0) return;

    // Check if we need to initialize any canvases
    const needsInitialization = layers.some((layer) => !layer.canvas);
    if (needsInitialization) {
      const updatedLayers = layers.map((layer) => {
        if (!layer.canvas) {
          const canvas = document.createElement("canvas");
          canvas.width = containerSize.width;
          canvas.height = containerSize.height;

          const context = canvas.getContext("2d");
          if (context) {
            context.lineCap = "round";
            context.lineJoin = "round";

            // If this is the background layer, fill it with the background color
            if (layer.id === 1) {
              console.log(
                "Initializing background layer with color:",
                backgroundColor,
              );
              context.fillStyle = backgroundColor;
              context.fillRect(0, 0, containerSize.width, containerSize.height);
            }
          }

          return {
            ...layer,
            canvas,
            context,
          };
        }
        return layer;
      });
      onLayerChange(updatedLayers);
    }

    // Create a temporary canvas for shape drawing if it doesn't exist
    if (!tempCanvas) {
      const canvas = document.createElement("canvas");
      canvas.width = containerSize.width;
      canvas.height = containerSize.height;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
      }

      setTempCanvas(canvas);
      setTempContext(ctx);
    }
  }, [containerSize, layers, onLayerChange, backgroundColor, tempCanvas]);

  // Track previous background color to avoid unnecessary updates
  const prevBackgroundColorRef = useRef(backgroundColor);

  // Update background color when it changes
  useEffect(() => {
    // Only update if the background color actually changed
    if (prevBackgroundColorRef.current === backgroundColor) return;

    console.log(
      "Background color changed from",
      prevBackgroundColorRef.current,
      "to",
      backgroundColor,
    );
    prevBackgroundColorRef.current = backgroundColor;

    const backgroundLayer = layers.find((layer) => layer.id === 1);
    if (backgroundLayer?.context && containerSize.width > 0) {
      // Clear the background layer first
      backgroundLayer.context.clearRect(
        0,
        0,
        containerSize.width,
        containerSize.height,
      );
      // Fill with the new background color
      backgroundLayer.context.fillStyle = backgroundColor;
      backgroundLayer.context.fillRect(
        0,
        0,
        containerSize.width,
        containerSize.height,
      );

      // Force a redraw of the visible canvas
      if (backgroundLayer.canvas) {
        const canvasCopy = document.createElement("canvas");
        canvasCopy.width = containerSize.width;
        canvasCopy.height = containerSize.height;
        const ctx = canvasCopy.getContext("2d");
        if (ctx) {
          ctx.drawImage(backgroundLayer.canvas, 0, 0);
          backgroundLayer.canvas = canvasCopy;
        }
      }
    }
  }, [backgroundColor, containerSize, layers]);

  // Drawing functions
  const startDrawing = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;

      const activeLayer = layers.find((l) => l.id === activeLayerId);
      if (!activeLayer?.context) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setIsDrawing(true);
      setStartPos({ x, y });
      setLastPos({ x, y });

      const ctx = activeLayer.context;
      ctx.beginPath();
      ctx.moveTo(x, y);

      if (tool === "brush") {
        ctx.strokeStyle = color;
        ctx.lineWidth = brushSize;
        ctx.globalAlpha = opacity;
        ctx.lineTo(x, y);
        ctx.stroke();
      } else if (tool === "eraser") {
        ctx.globalCompositeOperation = "destination-out";
        ctx.lineWidth = eraserSize;
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.globalCompositeOperation = "source-over";
      }
    },
    [layers, activeLayerId, tool, color, brushSize, eraserSize, opacity],
  );

  const draw = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDrawing || !containerRef.current) return;

      const activeLayer = layers.find((l) => l.id === activeLayerId);
      if (!activeLayer?.context) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ctx = activeLayer.context;

      if (tool === "brush") {
        ctx.strokeStyle = color;
        ctx.lineWidth = brushSize;
        ctx.globalAlpha = opacity;
        ctx.beginPath();
        ctx.moveTo(lastPos.x, lastPos.y);
        ctx.lineTo(x, y);
        ctx.stroke();
      } else if (tool === "eraser") {
        ctx.globalCompositeOperation = "destination-out";
        ctx.lineWidth = eraserSize;
        ctx.beginPath();
        ctx.moveTo(lastPos.x, lastPos.y);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.globalCompositeOperation = "source-over";
      } else if (
        (tool === "rectangle" || tool === "circle") &&
        tempContext &&
        tempCanvas
      ) {
        // For shape drawing, we need to clear and redraw on each mouse move
        tempContext.clearRect(0, 0, containerSize.width, containerSize.height);

        // Copy the current layer to the temp canvas
        if (activeLayer.canvas) {
          tempContext.drawImage(activeLayer.canvas, 0, 0);
        }

        tempContext.strokeStyle = color;
        tempContext.lineWidth = brushSize;
        tempContext.globalAlpha = opacity;

        if (tool === "rectangle") {
          const width = x - startPos.x;
          const height = y - startPos.y;
          tempContext.strokeRect(startPos.x, startPos.y, width, height);
        } else if (tool === "circle") {
          const radius = Math.sqrt(
            Math.pow(x - startPos.x, 2) + Math.pow(y - startPos.y, 2),
          );
          tempContext.beginPath();
          tempContext.arc(startPos.x, startPos.y, radius, 0, 2 * Math.PI);
          tempContext.stroke();
        }

        tempContext.globalAlpha = 1;

        // Increment the version to trigger a re-render
        setTempCanvasVersion((prev) => prev + 1);
      }
      // Update last position
      setLastPos({ x, y });
    },
    [
      isDrawing,
      layers,
      activeLayerId,
      tool,
      color,
      brushSize,
      eraserSize,
      opacity,
      startPos,
      lastPos,
      containerSize,
      tempContext,
      tempCanvas,
    ],
  );

  const stopDrawing = useCallback(() => {
    if (!isDrawing) return;
    setIsDrawing(false);

    // If we were drawing a shape, apply it to the active layer
    if (
      (tool === "rectangle" || tool === "circle") &&
      tempCanvas &&
      tempContext
    ) {
      const activeLayer = layers.find((l) => l.id === activeLayerId);
      if (activeLayer?.context && activeLayer.canvas) {
        // Apply the shape from temp canvas to the active layer
        activeLayer.context.drawImage(tempCanvas, 0, 0);
        // Clear the temp canvas
        tempContext.clearRect(0, 0, containerSize.width, containerSize.height);
      }
    }
  }, [
    isDrawing,
    tool,
    tempCanvas,
    tempContext,
    layers,
    activeLayerId,
    containerSize,
  ]);

  // Reference to the visible temp canvas element
  const visibleTempCanvasRef = useRef<HTMLCanvasElement | null>(null);

  // Update the visible temp canvas whenever the temp canvas changes
  useEffect(() => {
    if (
      visibleTempCanvasRef.current &&
      tempCanvas &&
      (tool === "rectangle" || tool === "circle")
    ) {
      const ctx = visibleTempCanvasRef.current.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, containerSize.width, containerSize.height);
        ctx.drawImage(tempCanvas, 0, 0);
      }
    }
  }, [tempCanvas, tool, containerSize, tempCanvasVersion]);

  // Render temp canvas for shape drawing
  const renderTempCanvas = () => {
    // Always show the temp canvas when rectangle or circle tool is selected
    if (!tempCanvas || (tool !== "rectangle" && tool !== "circle")) return null;

    return (
      <div
        className="absolute top-0 left-0 h-full w-full"
        style={{
          zIndex: 1000, // Above all layers
          pointerEvents: "none", // Don't capture mouse events
        }}
      >
        <canvas
          ref={visibleTempCanvasRef}
          width={containerSize.width}
          height={containerSize.height}
          className="h-full w-full"
        />
      </div>
    );
  };

  // Touch event handlers
  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      // Prevent scrolling while drawing
      e.preventDefault();

      const touch = e.touches[0]!;
      const mouseEvent = {
        clientX: touch.clientX,
        clientY: touch.clientY,
      } as React.MouseEvent<HTMLDivElement>;

      startDrawing(mouseEvent);
    },
    [startDrawing],
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      // Prevent scrolling while drawing
      e.preventDefault();

      const touch = e.touches[0]!;
      const mouseEvent = {
        clientX: touch.clientX,
        clientY: touch.clientY,
      } as React.MouseEvent<HTMLDivElement>;

      draw(mouseEvent);
    },
    [draw],
  );

  const handleTouchEnd = useCallback(() => {
    stopDrawing();
  }, [stopDrawing]);

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full ${cursorStyle}`}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {layers.map((layer) => {
        if (!layer.canvas || !layer.visible) return null;

        return (
          <div
            key={layer.id}
            className="absolute top-0 left-0 h-full w-full"
            style={{
              zIndex: layer.id,
            }}
          >
            <canvas
              key={
                layer.id === 1 ? `bg-${backgroundColor}` : `layer-${layer.id}`
              }
              width={containerSize.width}
              height={containerSize.height}
              className="h-full w-full"
              style={{
                display: layer.visible ? "block" : "none",
              }}
              ref={(el) => {
                if (el && layer.canvas) {
                  // Copy the content from our offscreen canvas to this visible canvas
                  const ctx = el.getContext("2d");
                  if (ctx && layer.canvas) {
                    // For background layer, always use the current background color
                    if (layer.id === 1) {
                      ctx.clearRect(0, 0, el.width, el.height);
                      ctx.fillStyle = backgroundColor;
                      ctx.fillRect(0, 0, el.width, el.height);
                    } else {
                      ctx.clearRect(0, 0, el.width, el.height);
                      ctx.drawImage(layer.canvas, 0, 0);
                    }
                  }
                }
              }}
            />
          </div>
        );
      })}
      {renderTempCanvas()}
    </div>
  );
};

// ////////////////////////////// Main Component ////////////////////////////// //
// Define the Layer interface
type Layer = {
  id: number;
  name: string;
  visible: boolean;
  canvas: HTMLCanvasElement | null;
  context: CanvasRenderingContext2D | null;
};
const CanvasKit = () => {
  // Canvas state
  const [tool, setTool] = useState<ToolItems>("brush");
  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(5);
  const [eraserSize, setEraserSize] = useState(10);
  const [opacity, setOpacity] = useState(1);
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  // Drawer state
  const [activeDrawer, setActiveDrawer] = useState<DrawerItem | null>(null);
  const [previousDrawer, setPreviousDrawer] = useState<DrawerItem | null>(null);

  // Layers state
  const [layers, setLayers] = useState<Layer[]>(LAYERS);
  const [activeLayer, setActiveLayer] = useState(2);

  // Tool selection
  const selectTool = useCallback((selectedTool: ToolItems) => {
    setTool(selectedTool);
  }, []);
  // Get cursor style based on current tool
  const getCursorStyle = () => {
    switch (tool) {
      case "brush":
        return "cursor-crosshair";
      case "eraser":
        return "cursor-cell";
      case "rectangle":
        return "cursor-crosshair";
      case "circle":
        return "cursor-crosshair";
      default:
        return "cursor-default";
    }
  };

  // Create drawer content with access to state
  const DRAWER = DRAWER_ITEMS.map((item) => {
    let content;

    if (item.item === "color") {
      content = <ColorPalette color={color} setColor={setColor} />;
    } else if (item.item === "settings") {
      content = (
        <ToolSettings
          tool={tool}
          brushSize={brushSize}
          setBrushSize={setBrushSize}
          eraserSize={eraserSize}
          setEraserSize={setEraserSize}
          opacity={opacity}
          setOpacity={setOpacity}
        />
      );
    } else if (item.item === "layers") {
      content = (
        <LayersPanel
          layers={[]}
          activeLayer={""}
          setActiveLayer={() => {}}
          toggleLayerVisibility={() => {}}
          removeLayer={() => {}}
          addLayer={() => {}}
          backgroundColor={backgroundColor}
          openBackgroundColorDrawer={() => openDrawer("background", "layers")}
        />
      );
    } else if (item.item === "background") {
      content = (
        <BackgroundColor
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
        />
      );
    }

    return {
      ...item,
      content,
    };
  });
  // Handle drawer open/close
  const openDrawer = (
    drawer: DrawerItem,
    fromDrawer: DrawerItem | null = null,
  ) => {
    if (activeDrawer && fromDrawer === null) {
      setPreviousDrawer(activeDrawer);
    } else if (fromDrawer) {
      setPreviousDrawer(fromDrawer);
    }
    setActiveDrawer(drawer);
  };
  const closeDrawer = () => {
    setActiveDrawer(null);
    setPreviousDrawer(null);
  };

  // Navigate back to previous drawer
  const navigateBack = () => {
    if (previousDrawer) {
      setActiveDrawer(previousDrawer);
      setPreviousDrawer(null);
    } else {
      closeDrawer();
    }
  };

  // Clear canvas
  const clearCanvas = () => {
    // TODO: Implement clear canvas functionality
  };

  return (
    <div className="flex h-screen flex-col bg-gray-50">
      {/* Navbar */}
      <header className="border-b border-gray-200 bg-white px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-500">
              <Paintbrush size={18} className="text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-800">Canvas Kit</h1>
          </div>

          <div className="flex items-center gap-2">
            <button
              // onClick={saveAsImage}
              className="flex items-center gap-1.5 rounded-lg bg-blue-500 px-3 py-1.5 text-white transition-colors hover:bg-blue-600"
            >
              <Download size={16} />
              <span>Save Image</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col overflow-hidden md:flex-row">
        {/* Left Toolbar */}
        <div className="flex justify-center gap-2 overflow-x-auto border-r border-gray-200 bg-white p-2 md:flex-col md:justify-start md:overflow-y-auto">
          {TOOLS.map((item) => (
            <button
              key={item.item}
              onClick={() => selectTool(item.item)}
              className={`rounded-lg p-3 ${
                tool === item.item
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              } transition-colors`}
              title={`${item.item.charAt(0).toUpperCase() + item.item.slice(1)} Tool (${item.shortcut})`}
            >
              <item.icon size={20} />
            </button>
          ))}
          <Separator />

          {DRAWER.map((drawer) => (
            <button
              key={drawer.item}
              onClick={() => openDrawer(drawer.item)}
              className={`rounded-lg p-3 ${
                activeDrawer === drawer.item
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              } transition-colors`}
              title={drawer.title}
            >
              <drawer.icon size={20} {...(drawer.iconProps ?? {})} />
            </button>
          ))}
          <Separator />

          <button
            onClick={clearCanvas}
            className="rounded-lg p-3 text-gray-700 transition-colors hover:bg-gray-100"
            title="Clear Canvas"
          >
            <Trash2 size={20} />
          </button>
        </div>

        {/* Canvas Area */}
        <div className="relative flex-1 overflow-hidden">
          <Canvas
            layers={layers}
            activeLayerId={activeLayer}
            backgroundColor={backgroundColor}
            tool={tool}
            color={color}
            brushSize={brushSize}
            eraserSize={eraserSize}
            opacity={opacity}
            onLayerChange={setLayers}
            cursorStyle={getCursorStyle()}
          />
        </div>

        {/* Drawers */}
        {DRAWER.map((drawer) => (
          <Drawer
            key={drawer.item}
            isOpen={activeDrawer === drawer.item}
            onClose={closeDrawer}
            title={drawer.title}
            previousDrawer={previousDrawer}
            onNavigateBack={navigateBack}
          >
            {drawer.content}
          </Drawer>
        ))}
      </main>
    </div>
  );
};

export default CanvasKit;
