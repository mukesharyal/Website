const products = [
  {
    name: 'S334e',
    brand: 'Optoma',
    adder: 'SVGA Conference Room Projector',
    image: 'S334e.jpg',
    pdf: 'S334e.pdf',
    description: `Brightness: 3,800 Lumens (ANSI)
                  Resolution: 800x600
                  Aspect Ratio: 4:3 (SVGA)
                  Contrast: 22,000:1 (full on/off)
                  Display Type: 1 cm DLP x 1
                  Color Processing: 10-bit
                  Video Modes: 720p, 1080i, 1080p/24, 576i, 576p, 480p, 480i
                  Data Modes: MAX 1600x1200
                  3D Modes: Full HD 3D
                  Lamp Type: 203W Metal Halide bulb
                  Lamp Life: 6,000 hours / 15,000 hours (Eco)
                  Lamp Model: SP.7D101GC01 (Buy Replacement Lamp)
                  Included Lens: 1.1x manual zoom, manual focus
                  Optional Lenses: No
                  Lens Shift: No
                  Throw Distance: 1.2 m - 12.0 m (Calculate Throw Distance)
                  Image Size: 70 cm - 774 cm
                  Throw Ratio: 1.94:1 - 2.16:1 (D)
                  Projector Placement: For a 254 cm diagonal screen, place the projector lens between 3.9 m and 4.4 m from the screen.
                  Digital Keystone: Vertical only
                  Projector Size: 10 cm x 31 cm x 24 cm (HxWxD)
                  Audible Noise: 27 dB
                  Internal Speakers: 10.0 Watts Mono
                  Power: 230 Watts 100V - 240V
                  Connection Panel:
                  Audio In: Mini Jack
                  Audio Out: Mini Jack
                  Composite: RCA
                  HDMI 1.4a
                  USB
                  VGA In: Dsub-15pin
                  Features: Full HD 3D`
    },
  {
    name: 'EB-X49',
    brand: 'Epson',
    adder: '3LCD Projector',
    image: 'EB-X49.png',
    pdf: 'EB-X49.pdf',
    description: `Technology
                  Projection System: 3LCD Technology, RGB liquid crystal shutter
                  LCD Panel: 0.55 inch with C2 Fine

                  Image
                  Color Light Output: 3,600 Lumen – 2,400 Lumen (economy)
                  Resolution: XGA, 1024 x 768, 4:3
                  Lamp: 210 W, 6,000 h durability, 12,000 h durability (economy mode)
                  Color Reproduction: Up to 1.07 billion colors

                  Optical
                  Zoom: Manual, Factor 1.2
                  Screen Size: 30 inches – 300 inches
                  Projection Lens Focal Length: 16.9 mm – 20.28 mm

                  Connectivity
                  USB Display Function: 3 in 1: Image/Mouse/Sound
                  Epson Projection App: Yes
                  Ad-Hoc / Infrastructure: Yes

                  Advanced Features
                  Security: Kensington lock, Wireless LAN unit lock
                  Other Features:
                  AV Mute Slide, Automatic keystone correction, Digital zoom, Direct Power on/off, Easy OSD pre-setting
                  Horizontal and vertical keystone correction, Network projection, OSD copy function, Quick Corner, Split-Screen-Function, Projection App, Projection set-up by NFC, Projection set-up by QR code
                  Video Color Modes: Blackboard, Dynamic, Presentation, sRGB, Theatre`
  },
  {
    name: 'PA503S',
    brand: 'ViewSonic',
    adder: 'SVGA Business Projector',
    image: 'PA503S.jpg',
    pdf: 'PA503S.pdf',
    description: `Projection System: 0.55" SVGA
                  Native Resolution: 800x600
                  Brightness: 4000 (ANSI Lumens)
                  Contrast Ratio with SuperEco Mode: 22000:1
                  Display Color: 1.07 Billion Colors
                  Light Source Type: 190W UHP Lamp
                  Light Source Life (hours) with Normal Mode: 5000
                  Light Source Life (hours) with SuperEco Mode: 15000
                  Lens: F=2.56-2.68, f=22-24.1mm
                  Optical Zoom: 1.1x
                  Digital Zoom: 0.8x-2.0x
                  Image Size: 30"-300"
                  Throw Distance: 1.19m-13.11m (100"@3.98m)
                  Keystone: +/- 40° (V)
                  Audible Noise (Normal): 31dB
                  Audible Noise (Eco) : 27dB
                  Input Lag: 16ms
                  Resolution Support: VGA(640 x 480) to FullHD(1920 x 1080)
                  HDTV Compatibility: 480i, 480p, 576i, 576p, 720p, 1080i, 1080p
                  Video Compatibility: NTSC, PAL, SECAM
                  Horizontal Frequency: 15K-102KHz
                  Vertical Scan Rate: 23-120Hz

                  Input
                  Computer in (share with component): 2
                  Composite: 1
                  HDMI: 1
                  (HDMI 1.4/ HDCP 1.4)
                  Audio-in (3.5mm): 1

                  Output
                  Monitor out: 1
                  Audio-out (3.5mm): 1
                  Speaker: 2W

                  Control
                  RS232 (DB 9-pin male): 1
                  USB Type Mini B (Services): 1`
  },
  {
    name: 'BS570',
    brand: 'Vivitek',
    adder: 'SVGA Projector',
    image: 'BS570.png',
    pdf: 'BS570.pdf',
    description: `Display Type: Single Chip 0.55" DLP Technology by TI

                  Resolution:
                  Native Resolution: SVGA (800 x 600)
                  Maximum Resolution: WUXGA (1,920 x 1,200)
                  Brightness: 4,200 ANSI Lumens
                  Projection Distance: 1.6m – 12m (3.6’ - 40’)
                  Contrast Ratio: 25,000:1
                  Image Size: 40" - 240"

                  Lamp Details
                  Lamp Power: 210W
                  Lamp Life: 5,000/7,000/10,000 Hours (Normal/Eco./Dynamic Eco)

                  Audio
                  Built-in Speaker: 2W (Mono)

                  Connectivity
                  Interface: HDMI v1.4b (x2), Composite Video, S-Video, VGA-In (x2), Audio-In (Mini-Jack), VGA-Out, Audio-Out (Mini-Jack), RS232`
  },
  {
    name: 'X1126AH',
    brand: 'Acer',
    adder: 'SVGA Projector',
    image: 'X1126AH.png',
    pdf: 'X1126AH.pdf',
    description: `Native Resolution: 800 x 600
                  Maximum Resolution: 1920 x 1200
                  Standard Mode Brightness: 4000 lm
                  Low Mode Brightness: 3200 lm
                  Compatible Aspect Ratio: 16:9
                  Native Aspect Ratio: 4:3
                  Contrast Ratio: 20,000:1
                  Digital Zoom: 2x
                  Colour Supported: 1.07 Billion Colors (30-bit)
                  Graphic Mode: SVGA

                  Projection Lens
                  Lens Type: Manual Zoom, Manual Focus
                  Minimum Diagonal Image Size: 584.20 mm
                  Maximum Diagonal Image Size: 7.62 m (300")
                  Minimum Projection Distance: 1 m
                  Maximum Projection Distance: 11.80 m

                  Lamp
                  Lamp Type: OSRAM
                  Number of Lamps: 1
                  Lamp Power: 220 W
                  Normal Mode Lamp Life: 6000 hours
                  Economy Mode Lamp Life: 7000 hours
                  ExtremeEco Mode Lamp Life: 10000 hours

                  Interfaces/Ports
                  HDMI: Yes
                  Number of USB Ports: 1
                  USB: Yes
                  USB Connector Type: 1 x Type-A
                  Number of Composite Video Ports: 1
                  Composite Video: Yes
                  Number of VGA Inputs: 1
                  VGA In: Yes
                  Number of VGA Outputs: 1
                  VGA Out: Yes
                  Number of Audio Inputs: 1
                  Number of Audio Outputs: 1
                  Total Number of HDMI Ports: 1`
  },
  {
    name: 'PJD5155',
    brand: 'ViewSonic',
    adder: 'Projector',
    image: 'PJD5155.jpg',
    pdf: 'PJD5155.pdf',
    description: `Display
                  Resolution: 800x600
                  Lens: Digital Zoom: 0.8X~2.0X
                  Size: 30 - 300 inch
                  Throw Distance: 1.0m - 8.0m
                  Throw Ratio: 1.86~2.04
                  Lamp: 190W
                  Brightness: 3300 ANSI Lumens
                  Contrast Ratio: 22,000:1 (DynamicEco Mode)
                  Keystone Correction: Vertical: +40~-40°, (Manual)
                  Aspect Ratio: 4:3
                  Color Depth: 1.07 Billion Colors (30 bits per color)
                  Optical Offset: 100%+/-5%

                  Input Signal
                  Video: NTSC: NTSC M (3.58 MHz), 4.43MHz PAL: PAL (B, D, G, H, I, M, N, 60) SECAM: SECAM (B, D, G, K, K1, L) SD: 480i and 576i ED: 480p and 576p HD: 720p,1080i, 1080p
                  Frequency: Fh: 15-102KHz; Fv: 23-120Hz

                  Compatibility
                  PC: 800x600@60Hz (native)
                  Mac: 800x600@60Hz (native)

                  Connector
                  RGB Input: VGA Input x2
                  RGB Output: VGA Output x1
                  Composite Video: RCA-1 x1
                  S Video: Mini-Din 4 pin (x1)
                  Component Video: Share with VGA x2
                  Digital: HDMI 1.4 x 1
                  Audio: 3.5mm Mini-Mono Jack (x1)
                  USB: Mini USBx1`
  },
  {
    name: 'EB-E01',
    brand: 'Epson',
    adder: 'XGA 3LCD Projector',
    image: 'EB-E01.png',
    pdf: 'EB-E01.pdf',
    description: `Technology
                  Projection System: 3LCD Technology, RGB liquid crystal shutter
                  LCD Panel: 55 inch with C2 Fine

                  Image
                  Color Light Output: 3,300 Lumen – 2,200 Lumen
                  White Light Output: 3,300 Lumen – 2,200 Lumen
                  Resolution: XGA, 1024 x 768, 4:3
                  Contrast Ratio: 15,000:1
                  Lamp: UHE, 210 W, 6,000 h durability, 12,000 h durability (economy mode)
                  Color Reproduction: Up to 1.07 billion colors

                  Optical
                  Zoom: Digital, Factor: 1.35
                  Screen Size: 30 inches – 350 inches
                  Projection Distance Wide/Tele: 1.76 m (60 inch screen)
                  Projection Lens Focal Length: 16.7 mm
                  Projection Lens Focus: Manual

                  Connectivity
                  USB Display Function: 2 in 1: Image / Mouse
                  Interfaces: VGA in, HDMI in, USB 2.0 Type B

                  Advanced Features
                  Security: Kensington lock, Security bar, Password protection
                  3D: No
                  Other Features: AV Mute Slide, Auto source search, Built-in speaker, Horizontal and vertical keystone correction, Long lamp life, Quick Corner, Split-Screen-Function
                  Video Color Modes: Blackboard, Cinema, Dynamic, Presentation, sRGB`
  },
  {
    name: 'ZenBeam S2',
    brand: 'Asus',
    adder: 'DLP Projector',
    image: 'S2.png',
    pdf: 'S2.pdf',
    description: `Display
                  Display Technology: DLP
                  Light Source: LED
                  LED Lifespan: 30,000 hours
                  Resolution (Native): 1280 x 720 (HD)
                  Maximum Input Resolution: 1920 x 1080
                  Brightness: 500 Lumens

                  Projection Lens
                  Projection Distance: 1.5m ~ 3m
                  Projection Size: 60" ~ 120"
                  Focus: Auto

                  Video Features
                  Splendid Presentation Mode
                  Splendid Standard Mode
                  Splendid Theater Mode
                  Splendid ECO Mode
                  Splendid SOS Mode
                  Splendid Flashlight Mode
                  Projector Placement: Front Table, Rear Table, Front Ceiling, Rear Ceiling
                  3D Support: Yes
                  HDCP Support: Yes
                  4 Corner Adjustment: Yes

                  I/O Ports
                  HDMI: Yes
                  USB-C (DP): Yes
                  USB-A: Yes
                  Audio Out: Yes
                  Wireless Projection
                  Wireless Projection: Yes

                  WiFi
                  WiFi: Embedded

                  Battery
                  Battery Life (Max.): up to 3.5 Hours`
  },
  {
    name: 'D967-WT',
    brand: 'Vivitek',
    adder: 'XGA Projector',
    image: 'D967-WT.jpg',
    pdf: 'D967-WT.pdf',
    description: `Brightness: 5500 ANSI Lumens
                  Native Resolution: XGA (1024 x 768)
                  Max. Resolution: WUXGA (1920x1200)
                  Lamp Life and Type: 2500/3500/4000 Hours (Normal/Economy/Dynamic Economy Mode), 310W
                  Lamp Part #: 5811118436-SVV
                  Image Size (Diagonal): 23.4" to 300" (0.6 to 7.6 m)
                  Projection Distance: 4.9' to 32.8' (1.5 to 10.0 m)
                  Color Spectrum: 1.07 Billion
                  Speaker: 5W Mono
                  Remote Control: Full Featured IR Remote with Laser Pointer and Mouse
                  Computer Compatibility: WUXGA, UXGA, WXGA, SXGA+, SXGA, XGA, SVGA, VGA Resized; VESA Standards; PC and Macintosh Compatible
                  Video Compatibility: SDTV(480i, 576i), EDTV (480p, 576p), HDTV (720p, 1080i/p), NTSC/NTSC 4.43, PAL B/G/H/I/M/N 60, SECAM
                  I/O Connection Ports: HDMI v1.4 (x2), Display Port, VGA-In (x2), Video, S-Video, VGA-Out, RCA Stereo-In, Mini-Jack Audio-In, Mini-Jack Audio-Out, RJ45, 12V Trigger, RS-232c, 3D Sync, USB (Service)
                  3D Functionality: Full HD 3D (Via DLP® Link™, BluRay 3D)
                  Security: Kensington® Lock Port, Security Bar`
  },
  {
    name: 'W334',
    brand: 'Optoma',
    adder: 'WXGA Projector',
    image: 'W334.jpg',
    pdf: 'W334.pdf',
    description: `Brand: Optoma
                  Resolution: 1280 x 800
                  Graphics Display: WXGA
                  Brightness: 3700 lm
                  Contrast Ratio: 22000:1
                  Lamp Wattage: 203 W
                  Lamp Life Normal Mode: 10000 (Eco) h, 12000 (Dynamic) h, 15000 (Eco+) h, 6000 (Bright) h
                  Fan Noise Normal Mode: 27 (Typical) dB
                  Built In Speaker: Yes
                  Operating Voltage: 100 – 240 V
                  Weight: 3 kg
                  Depth: 244 mm
                  Height: 108 mm
                  Maximum Operating Voltage: 240 V
                  Minimum Operating Voltage: 100 V
                  Aspect Ratio: 16:9 (Compatible), 4:3
                  Series: W344
                  Width: 316 mm
                  Maximum Screen Size: 7.61 m`
  },
  {
    name: 'DS331',
    brand: 'Optoma',
    adder: 'SVGA Portable Projector',
    image: 'DS331.jpg',
    pdf: 'DS331.pdf',
    description: `Brightness: 3,200 Lumens (ANSI)
                  Resolution: 800x600
                  Aspect Ratio: 4:3 (SVGA)
                  Contrast: 20,000:1 (full on/off)
                  Display Type: 2 cm DLP x 1
                  Color Processing: 10-bit
                  Video Modes: 720p, 1080i, 1080p/60, 480p, 480i
                  Data Modes: MAX 1920x1080
                  3D Modes: PC 3D Ready
                  Lamp Type: 190W P-VIP bulb
                  Lamp Life: 5,000 hours / 10,000 hours (Eco)
                  Lamp Model: PBA84-2400 (Buy Replacement Lamp)
                  Included Lens: 1.1x manual zoom, manual focus
                  Optional Lenses: No
                  Lens Shift: No
                  Throw Distance: 1.2 m - 11.3 m (Calculate Throw Distance)
                  Image Size: 75 cm - 762 cm
                  Digital Zoom: Yes
                  Digital Keystone: Vertical only
                  Internal Speakers: 2.0 Watts Mono
                  Power: 250 Watts 100V - 240V
                  Connection Panel:
                  HDMI 1.4a x 2
                  RS232: DB-9pin
                  USB x 2
                  Features: PC 3D Ready
                  Additional Features: The Optoma DS331 includes an extensive list of advanced features, including 2x HDMI v1.4a ports with full 3D compatibility, USB type-A with 5V DC 1A power, mini USB-B for remote mouse convenience, built-in 2-Watt speaker & RS-232 connectivity`
  },
  {
    name: 'X1123HP',
    brand: 'Acer',
    adder: 'DLP Projector',
    image: 'X1123HP.png',
    pdf: 'X1123HP.pdf',
    description: `Native Resolution: 800 x 600
                  Maximum Resolution: 1920 x 1200
                  Standard Mode Brightness: 4000 lm
                  Low Mode Brightness: 3200 lm
                  Compatible Aspect Ratio: 16:9
                  Native Aspect Ratio: 4:3
                  Digital Zoom: 2x
                  Colour Supported: 1.07 Billion Colors (30-bit)
                  Graphic Mode: SVGA

                  Projection Lens
                  Lens Type: Manual Zoom, Manual Focus
                  Minimum Diagonal Image Size: 584.20 mm
                  Maximum Diagonal Image Size: 7.62 m (300")
                  Minimum Projection Distance: 1 m
                  Maximum Projection Distance: 12 m

                  Lamp
                  Lamp Type: UHP
                  Number of Lamps: 1
                  Lamp Power: 210 W
                  Normal Mode Lamp Life: 5000 hours
                  Economy Mode Lamp Life: 10000 hours
                  ExtremeEco Mode Lamp Life: 15000 hours

                  Interfaces/Ports
                  HDMI: Yes
                  Number of USB Ports: 1
                  USB: Yes
                  USB Connector Type: 1 x Mini-B
                  Number of Composite Video Ports: 1
                  Composite Video: Yes
                  Number of VGA Inputs: 1
                  VGA In: Yes
                  Number of VGA Outputs: 1
                  VGA Out: Yes
                  Number of Audio Inputs: 1
                  Number of Audio Outputs: 1
                  Total Number of HDMI Ports: 1

                  Audio
                  Number of Speakers: 1
                  Speaker Output Mode: Mono`
  },
  {
    name: 'NP-VE304G',
    brand: 'NEC',
    adder: 'SVGA Projector',
    image: 'NP-VE304G.jpg',
    pdf: 'NP-VE304G.pdf',
    description: `Brand: NEC
                  Product Name: NEC NP-VE304G Projector
                  Model: VE304G
                  Country of Origin: Japan
                  Connectors: RGB In, PC Control, 1 x RGB Out Video, HDMI, 1 x Audio In
                  Lamp Life (Normal / Eco): 6000 H / 4500 H
                  Speakers: 2 W monaural
                  Screen Size: 30 inch minimum, 300 inch maximum
                  Display: DLP Technology
                  Aspect Ratio: 1.95 - 2.15
                  Native Resolution: 800 x 600 (SVGA)
                  Lumens (Brightness): 3300 ANSI Lumens
                  Contrast Ratio: 10000:1`
  },
  {
    name: 'P502W',
    brand: 'NEC',
    adder: 'DLP Projector',
    image: 'P502W.jpg',
    pdf: 'P502W.pdf',
    description: `Brightness: 5,000 Lumens (ANSI)
                  Resolution: 1280x800
                  Aspect Ratio: 16:10 (WXGA)
                  Contrast: 6,000:1 (full on/off)
                  Dynamic Iris: Yes
                  Video Modes: 720p, 1080i, 1080p/60, 576i, 576p, 480p, 480i
                  Data Modes: MAX 1920x1200
                  Lamp Model: NP39LP
                  Lens Shift: Horizontal & Vertical
                  Throw Distance: 1.4 m - 8.4 m
                  Image Size: 74 cm - 763 cm
                  Projector Placement: For a 254 cm diagonal screen, place the projector lens between 2.8 m and 4.7 m from the screen.
                  Digital Zoom: Yes
                  Digital Keystone: Horizontal & Vertical
                  Connection Panel:
                  • Audio In: Mini Jack
                  • Audio In: RCA
                  • Audio Out: Mini Jack
                  • Composite: RCA
                  • HDBaseT: RJ-45
                  • HDMI x 2
                  • Network: RJ-45
                  • RS232: DB-9pin
                  • USB
                  • VGA In: Dsub-15pin
                  • VGA Out: Dsub-15pin
                  Features:
                  • Closed Captioning
                  • DICOM
                  • Geometric Correction
                  • Blackboard Mode
                  Additional Features:
                  • IEU Lite (Image Express Utility Lite) for audio and video transmission from a computer to the projector over the network`
  },
  {
    name: 'PT-VW430EA',
    brand: 'Panasonic',
    adder: 'Portable Projector',
    image: 'PT-VW430EA.png',
    pdf: 'PT-VW430EA.pdf',
    description: `LCD Panel
                  Panel size: 15 mm (0.59 inches) diagonal (16:10 aspect ratio)
                  Display method: Transparent LCD panel (x 3, R/G/B)
                  Pixels: 1,024,000 (1,280 x 800) x 3, total of 3,072,000 pixels

                  Lens
                  1.6x manual zoom (throw ratio: 1.18-1.90:1), manual focus, F 1.60-2.12, f 15.28-24.62 mm

                  Lamp
                  280 W x 1, lamp replacement cycle (lamp power: Normal/Eco): 2,500 hours/4,000 hours
                  Screen size (diagonal): 0.76-7.62 m (30-300 inch), 16:10 aspect ratio
                  Brightness: 4,300 lm (lamp power: Normal)
                  Resolution: 1,280 x 800 pixels
                  Installation: Ceiling/floor, front/rear

                  Terminals
                  HDMI IN: HDMI 19-pin x 1 (compatible with HDCP) 480p, 576p, 720/60p, 720/50p, 1080/60i, 1080/50i, 1080/60p, 1080/50p, VGA (640 x 480)-WUXGA (1,920 x 1,200)
                  VIDEO IN: RCA pin x 1 (Composite VIDEO)
                  S-VIDEO IN: Mini DIN 4-pin x 1 (S-VIDEO)
                  AUDIO IN: RCA pin x 2 (L/R x 1) for VIDEO/S-VIDEO input
                  COMPUTER 1 AUDIO IN: M3 x 1 (L-R x 1)
                  COMPUTER AUDIO IN 2 (MIC IN): M3 x 1 (L-R x 1) for audio input or for microphone connection (variable)`
  },
  {
    name: 'DW284-ST',
    brand: 'Vivitek',
    adder: 'Portable Projector',
    image: 'DW284-ST.jpg',
    pdf: 'DW284-ST.pdf',
    description: `Native Resolution: WXGA (1280 x 800)
                  Brightness: 3700 ANSI Lumens
                  Max. Supported Resolution: WUXGA (1920 x 1200) @ 60Hz
                  Lamp Life and Type: 5,500 / 7,000 / 10,000 Hours (Normal / Eco. / Dynamic Eco. Mode), 210W
                  Display Type: Single chip DLP® Technology by Texas Instruments
                  Chip Size: 0.65” DMD
                  Image Size (Diagonal): 50" - 100"
                  Projection Distance: 0.53m - 1.09m
                  Speakers: 2W
                  I/O Connection Ports:
                  • VGA-In (15-pin D-Sub) (x2)
                  • HDMI (x2)
                  • S-Video
                  • Composite Video
                  • Audio-In (Mini-Jack)
                  • VGA-Out (15-pin D-Sub)
                  • Audio-Out (Mini-Jack)
                  • RS-232
                  • USB miniB (Service)
                  3D Ready (DLP link, PC + Video): Yes
                  Standard Accessories:
                  • VGA Cable
                  • User Manual (CD)
                  • Quick Start Guide
                  • Warranty Card (by region)
                  • Remote Controller (with battery)
                  • AC Power Cord
                  Optional Accessories:
                  • Spare Lamp P/N: XX5810005600
                  • Remote Control P/N: XX5040005400
                  • Carrying Case P/N`
  },
  {
    name: 'EB-W06',
    brand: 'Epson',
    adder: 'WXGA 3LCD Projector',
    image: 'EB-W06.png',
    pdf: 'EB-W06.pdf',
    description: `Technology
                  Projection System: 3LCD Technology, RGB liquid crystal shutter
                  LCD Panel: 0.59 inch with C2 Fine

                  Image
                  Color Light Output: 3,700 Lumen – 2,400 Lumen
                  White Light Output: 3,700 Lumen – 2,400 Lumen
                  Resolution: WXGA, 1280 x 800, 16:10
                  Lamp: UHE, 210 W, 6,000 h durability, 12,000 h durability (economy)
                  Color Reproduction: Up to 1.07 billion colors

                  Optical
                  Zoom: Manual, Factor 1.2
                  Screen Size: 33 inches – 320 inches
                  Projection Distance Wide/Tele: 1.68 m – 2.02 m (60 inch screen)
                  Projection Lens Focus: Manual

                  Connectivity
                  USB Display Function: 2 in 1: Image/Mouse
                  Interfaces:
                  USB 2.0 Type A, USB 2.0 Type B, VGA in, HDMI in, Composite in, Cinch audio in
                  Wireless LAN IEEE 802.11b/g/n (opt)

                  Advanced Features
                  Security: Kensington lock, Wireless LAN unit lock, Password protection
                  3D: No
                  Other Features: AV Mute Slide, Auto source search, Horizontal and vertical keystone correction, Quick Corner, Split-Screen-Function
                  Video Color Modes: Blackboard, Cinema, Dynamic, Presentation, sRGB`
  }
];




const productsContainer = document.getElementById('products-container');

    products.forEach((product, index) => {
      const productCard = `
        <div class="cell js-modal-trigger" data-target="productModel" data-id=${index} style="cursor: pointer">
          <div class="card product-card">
            <div class="card-image">
              <figure class="image is-square">
                <img
                  src="Stuffs/${product.image}"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4 is-size-6-mobile">${product.name}</p>
                  <p class="subtitle is-6 is-size-7-mobile">${product.brand}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      productsContainer.innerHTML += productCard;
    });



    document.addEventListener('DOMContentLoaded', () => {
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
    
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    
      // Minimize navbar when a link is clicked
      const $navbarItems = Array.from(document.querySelectorAll('.navbar-menu .navbar-item'));
      $navbarItems.forEach(item => {
        item.addEventListener('click', () => {
          $navbarBurgers.forEach(burger => burger.classList.remove('is-active'));
          document.querySelector('.navbar-menu').classList.remove('is-active');
        });
      });
    });
    








document.addEventListener('DOMContentLoaded', () => {

  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal with product details
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = document.getElementById('productModal');

    $trigger.addEventListener('click', () => {
      // Get the product index from the data-id attribute
      const productId = $trigger.getAttribute('data-id');
      const product = products[productId];

      // Populate modal with product details
      modal.querySelector('.modal-card-title').textContent = `Product Details`;
      modal.querySelector('.modal-card-figure').innerHTML = `<img src="Stuffs/${product.image}">`
      modal.querySelector('.modal-card-description').innerHTML = `
      <h4 class="title is-spaced is-4 has-text-centered"> ${product.brand} ${product.name} ${product.adder} </h4>
        <h5 class="title is-5 is-spaced">Product Description</h5>
        ${product.description.replace(/\n/g, '<br>')}
      `;
      modal.querySelector('.open-pdf').href = `Stuffs/${product.pdf}`;

      openModal(modal);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
      closeAllModals();
    }
  });
});





document.addEventListener("DOMContentLoaded", function() {
  const bgImages = [
    'url("Assets/hero.jpg")',
    'url("Assets/background.jpg")',
    // Add more background images if needed
  ];

  // Preload background images
  let loadedImages = 0;
  const totalImages = bgImages.length;

  bgImages.forEach(function(image) {
    const img = new Image();
    img.src = image.replace(/url\("|"\)/g, ''); // Remove the url() wrapper

    img.onload = function() {
      loadedImages++;
      if (loadedImages === totalImages) {
        hidePreloader();
      }
    };

    img.onerror = function() {
      console.error(`Failed to load background image: ${img.src}`);
      loadedImages++;
      if (loadedImages === totalImages) {
        hidePreloader();
      }
    };
  });

  function hidePreloader() {
    document.getElementById("preloader").style.display = "none";
    document.body.style.overflow = "auto"; // Enable scrolling after loading
  }
});





