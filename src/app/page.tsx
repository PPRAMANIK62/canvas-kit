"use client";

import { motion } from "framer-motion";
import { useCallback, useState, type ReactNode } from "react";

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
  colorPalette: string[];
};
const ColorPalette = ({}: ColorPaletteProps) => {
  return <div>Color Palette</div>;
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

// ////////////////////////////// All the required icons ////////////////////////////// //
interface IconProps {
  size?: number;
  className?: string;
}
const Circle = ({ size = 24, className = "" }: IconProps) => {
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
const Download = ({ size = 24, className = "" }: IconProps) => {
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
const Eraser = ({ size = 24, className = "" }: IconProps) => {
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
const Layers = ({ size = 24, className = "" }: IconProps) => {
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
const Paintbrush = ({ size = 24, className = "" }: IconProps) => {
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
const Palette = ({ size = 24, className = "" }: IconProps) => {
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
const Settings = ({ size = 24, className = "" }: IconProps) => {
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
const Square = ({ size = 24, className = "" }: IconProps) => {
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
const Trash2 = ({ size = 24, className = "" }: IconProps) => {
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
const Eye = ({ size = 24, className = "" }: IconProps) => {
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
const EyeOff = ({ size = 24, className = "" }: IconProps) => {
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
const Plus = ({ size = 24, className = "" }: IconProps) => {
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
const X = ({ size = 24, className = "" }: IconProps) => {
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
const ChevronLeft = ({ size = 24, className = "" }: IconProps) => {
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
  { name: "brush", icon: Paintbrush, shortcut: "B" },
  { name: "eraser", icon: Eraser, shortcut: "E" },
  { name: "rectangle", icon: Square, shortcut: "R" },
  { name: "circle", icon: Circle, shortcut: "C" },
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
const colorPalette = [
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

// ////////////////////////////// Types ////////////////////////////// //
type DrawerItem = (typeof DRAWER_ITEMS)[number]["item"];

// ////////////////////////////// Main Component ////////////////////////////// //
const CanvasKit = () => {
  // Canvas state
  const [tool, setTool] = useState<(typeof TOOLS)[number]["name"]>("brush");
  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(5);
  const [eraserSize, setEraserSize] = useState(10);
  const [opacity, setOpacity] = useState(1);
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  // Drawer state
  const [activeDrawer, setActiveDrawer] = useState<DrawerItem | null>(null);
  const [previousDrawer, setPreviousDrawer] = useState<DrawerItem | null>(null);

  // Tool selection
  const selectTool = useCallback(
    (selectedTool: (typeof TOOLS)[number]["name"]) => {
      setTool(selectedTool);
    },
    [],
  );

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

  // Create drawer content with access to state
  const DRAWER = DRAWER_ITEMS.map((item) => {
    let content;

    if (item.item === "color") {
      content = (
        <ColorPalette
          color={color}
          setColor={setColor}
          colorPalette={colorPalette}
        />
      );
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
              key={item.name}
              onClick={() => selectTool(item.name)}
              className={`rounded-lg p-3 ${
                tool === item.name
                  ? "bg-blue-100 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              } transition-colors`}
              title={`${item.name.charAt(0).toUpperCase() + item.name.slice(1)} Tool (${item.shortcut})`}
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
