
import { PuzzleItem, GameMode } from './types';

export const CATEGORIES = {
  ANIMALS: {
    name: 'الحيوانات',
    items: [
      { id: '1', image: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?q=80&w=400&h=400&auto=format&fit=crop', word: 'قطة', value: 'قطة' },
      { id: '2', image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=400&h=400&auto=format&fit=crop', word: 'كلب', value: 'كلب' },
      { id: '3', image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=400&h=400&auto=format&fit=crop', word: 'أسد', value: 'أسد' },
      { id: '4', image: 'https://images.unsplash.com/photo-1610957735048-538a729f16ab?q=80&w=400&h=400&auto=format&fit=crop', word: 'فيل', value: 'فيل' },
      { id: '5', image: 'https://images.unsplash.com/photo-1548960095-770e3e6364de?q=80&w=400&h=400&auto=format&fit=crop', word: 'عصفور', value: 'عصفور' },
      { id: '6', image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?q=80&w=400&h=400&auto=format&fit=crop', word: 'أرنب', value: 'أرنب' },
      { id: '7', image: 'https://images.unsplash.com/photo-1700299926955-d68c16ba107b?q=80&w=400&h=400&auto=format&fit=crop', word: 'جمل', value: 'جمل' },
      { id: '8', image: 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=400&h=400&auto=format&fit=crop', word: 'قرد', value: 'قرد' },
      { id: '9', image: 'https://images.unsplash.com/photo-1604336755604-96ee6fa9f3f1?q=80&w=400&h=400&auto=format&fit=crop', word: 'زرافة', value: 'زرافة' },
    ]
  },
  NUMBERS: {
    name: 'الأرقام',
    items: [
      { id: 'n1', image: 'https://images.unsplash.com/photo-1621360841013-c7683c65d9ec6?q=80&w=400&h=400&auto=format&fit=crop', word: 'واحد', value: 1 },
      { id: 'n2', image: 'https://images.unsplash.com/photo-1563223552-30d01fda3fead?q=80&w=400&h=400&auto=format&fit=crop', word: 'اثنان', value: 2 },
      { id: 'n3', image: 'https://images.unsplash.com/photo-1518199266791-5375fa83190b7?q=80&w=400&h=400&auto=format&fit=crop', word: 'ثلاثة', value: 3 },
      { id: 'n4', image: 'https://images.unsplash.com/photo-1502472545332-e24162fe3b2d3?q=80&w=400&h=400&auto=format&fit=crop', word: 'أربعة', value: 4 },
      { id: 'n5', image: 'https://images.unsplash.com/photo-1610484826967-09c5720t78c7?q=80&w=400&h=400&auto=format&fit=crop', word: 'خمسة', value: 5 },
      { id: 'n6', image: 'https://images.unsplash.com/photo-1518331647614-7a1f04cdt34cf?q=80&w=400&h=400&auto=format&fit=crop', word: 'ستة', value: 6 },
      { id: 'n7', image: 'https://images.unsplash.com/photo-1511216113906-8f57bb8t3e776?q=80&w=400&h=400&auto=format&fit=crop', word: 'سبعة', value: 7 },
      { id: 'n8', image: 'https://images.unsplash.com/photo-1493612216891-65cbf3bt5c420?q=80&w=400&h=400&auto=format&fit=crop', word: 'ثمانية', value: 8 },
      { id: 'n9', image: 'https://images.unsplash.com/photo-1599305090598-fe179dt501c27?q=80&w=400&h=400&auto=format&fit=crop', word: 'تسعة', value: 9 },
    ]
  },
  FRUITS: {
    name: 'الفواكه',
    items: [
      { id: 'f1', image: 'https://images.unsplash.com/photo-1630563451961-ac2ff27616ab?q=80&w=400&h=400&auto=format&fit=crop', word: 'تفاح', value: 'تفاح' },
      { id: 'f2', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=400&h=400&auto=format&fit=crop', word: 'موز', value: 'موز' },
      { id: 'f3', image: 'https://images.unsplash.com/photo-1598048150218-53ab5609ef31?q=80&w=400&h=400&auto=format&fit=crop', word: 'برتقال', value: 'برتقال' },
      { id: 'f4', image: 'https://images.unsplash.com/photo-1566804770468-867f6158bda5?q=80&w=400&h=400&auto=format&fit=crop', word: 'فراولة', value: 'فراولة' },
      { id: 'f5', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=400&h=400&auto=format&fit=crop', word: 'بطيخ', value: 'بطيخ' },
      { id: 'f6', image: 'https://images.unsplash.com/photo-1696192113305-54e7160f59df?q=80&w=400&h=400&auto=format&fit=crop', word: 'عنب', value: 'عنب' },
      { id: 'f7', image: 'https://images.unsplash.com/photo-1490982730853-c4de55d345b3?q=80&w=400&h=400&auto=format&fit=crop', word: 'أناناس', value: 'أناناس' },
      { id: 'f8', image: 'https://images.unsplash.com/photo-1528821154947-1aa3d1b74941?q=80&w=400&h=400&auto=format&fit=crop', word: 'كرز', value: 'كرز' },
      { id: 'f9', image: 'https://images.unsplash.com/photo-1597761855431-414e6fdf0e8a?q=80&w=400&h=400&auto=format&fit=crop', word: 'كمثرى', value: 'كمثرى' },
    ]
  },
  SHAPES: {
    name: 'الأشكال',
    items: [
      { id: 's1', image: 'https://img.freepik.com/free-photo/top-view-yellow-circle-white-background_23-2148209934.jpg?t=st=1767296593~exp=1767300193~hmac=5355348d93753aff33c668ec46e9564535bb5f82670c7f6c45d8c948bd4abbd1&w=2000?q=80&w=400&h=400&auto=format&fit=crop', word: 'دائرة', value: 'دائرة' },
      { id: 's2', image: 'https://images.unsplash.com/photo-1626846116799-ad61f874f99d?q=80&w=400&h=400&auto=format&fit=crop', word: 'مربع', value: 'مربع' },
      { id: 's3', image: 'https://images.unsplash.com/vector-1741103616326-af06f64136c5?q=80&w=400&h=400&auto=format&fit=crop', word: 'مثلث', value: 'مثلث' },
      { id: 's4', image: 'https://images.unsplash.com/vector-1741103616281-181934d479bf?q=80&w=400&h=400&auto=format&fit=crop', word: 'نجمة', value: 'نجمة' },
      { id: 's5', image: 'https://images.unsplash.com/vector-1742426422818-06bd33c02f96?q=80&w=400&h=400&auto=format&fit=crop', word: 'قلب', value: 'قلب' },
      { id: 's6', image: 'https://images.unsplash.com/vector-1762514272805-1ebf7aa3e735?q=80&w=400&h=400&auto=format&fit=crop', word: 'مستطيل', value: 'مستطيل' },
      { id: 's7', image: 'https://img.freepik.com/free-vector/blue-pentagon-geometric-shape-vector_53876-175075.jpg?t=st=1767296031~exp=1767299631~hmac=8782ec714b27f5c08c90e09225408673f0ec53972b4be56a9c77b6c23eb85cad&w=2000?q=80&w=400&h=400&auto=format&fit=crop', word: 'خماسي', value: 'خماسي' },
      { id: 's8', image: 'https://img.freepik.com/free-vector/purple-hexagon-geometric-shape-vector_53876-175076.jpg?t=st=1767296175~exp=1767299775~hmac=122c8c34d66dc5bb9ef7f1c942b61536320415c19ea7631a152f5a0ed5c64daa&w=2000?q=80&w=400&h=400&auto=format&fit=crop', word: 'سداسي', value: 'سداسي' },
      { id: 's9', image: 'https://img.freepik.com/free-vector/green-rhombus-geometric-shape-vector_53876-175078.jpg?t=st=1767296489~exp=1767300089~hmac=8bff1598f307c7595137ee427cb7e8a2a97c10bddf3b11e5e54b39171d97f297&w=2000?q=80&w=400&h=400&auto=format&fit=crop', word: 'معين', value: 'معين' },
    ]
  },
  TRANSPORTATION: {
    name: 'وسائل النقل',
    items: [
      { id: 't1', image: 'https://img.freepik.com/free-vector/gray-sedan-car-isolated-white-vector_53876-67362.jpg?t=st=1767296791~exp=1767300391~hmac=a62d95eed045f96c77dccff38d10fe1a94465b93aea92e6d46bc89a014c8a904&w=2000?q=80&w=400&h=400&auto=format&fit=crop', word: 'سيارة', value: 'سيارة' },
      { id: 't2', image: 'https://img.freepik.com/free-photo/view-3d-steam-engine-train_23-2150905541.jpg?t=st=1767296850~exp=1767300450~hmac=09896a2ac2e6d061eaca169a7b66469ed1aeee46d6e2dd6113b7dbb6bbc12b1b&w=2000?q=80&w=400&h=400&auto=format&fit=crop', word: 'قطار', value: 'قطار' },
      { id: 't3', image: 'https://img.freepik.com/free-photo/place-flying-sunset-sky_1112-1133.jpg?t=st=1767296888~exp=1767300488~hmac=b51b0c24ef2cd91cdd287d134b9e806bae23a6f1c62c6e112d24c8ef192815c6&w=2000?q=80&w=400&h=400&auto=format&fit=crop', word: 'طائرة', value: 'طائرة' },
      { id: 't4', image: 'https://img.freepik.com/free-vector/school-bus-transport_24877-83090.jpg?t=st=1767296928~exp=1767300528~hmac=6be04e87cd1cfc33560ba2fd978a7fe53657faa7d66ad2ebb95e949fb4894723&w=2000?q=80&w=400&h=400&auto=format&fit=crop', word: 'حافلة', value: 'حافلة' },
      { id: 't5', image: 'https://img.freepik.com/free-vector/red-color-motorcycle-isolated-white-background_1284-38725.jpg?t=st=1767296983~exp=1767300583~hmac=583ce5d13feb8e3c4dbaff414ee3b087a31b1c80f15274a5d63308eaa1830464&w=2000?q=80&w=400&h=400&auto=format&fit=crop', word: 'دراجة نارية', value: 'دراجة نارية' },
      { id: 't6', image: 'https://img.freepik.com/free-photo/view-large-ship-water_23-2150785282.jpg?t=st=1767297151~exp=1767300751~hmac=1863b217a820be2205d1e266235395fd6d275f4e0d1b210b3280ee4da9c9ee5b&w=2000?q=80&w=400&h=400&auto=format&fit=crop', word: 'سفينة', value: 'سفينة' },
      { id: 't7', image: 'https://img.freepik.com/free-vector/cute-pink-bicycle-isolated_1284-43044.jpg?t=st=1767297210~exp=1767300810~hmac=b54aae49cfe09eca78afaee21a64ae3c2bdc881df1684a44ce28def280f67030&w=2000?q=80&w=400&h=400&auto=format&fit=crop', word: 'دراجة', value: 'دراجة' },
      { id: 't8', image: 'https://img.freepik.com/free-photo/semi-truck-carrying-blue-shipping-container_23-2151998697.jpg?t=st=1767297332~exp=1767300932~hmac=6c6e25583985c84a60f9f0969b53531a7407cbe5b731f9a98c82081b60b3a894&w=2000?q=80&w=400&h=400&auto=format&fit=crop', word: 'شاحنة', value: 'شاحنة' },
      { id: 't9', image: 'https://img.freepik.com/free-photo/view-graphic-3d-helicopter_23-2150849107.jpg?t=st=1767297407~exp=1767301007~hmac=07c854240f3e40d34d07463762165c3608271e4a74bc99086d93bfc77d9ceec9&w=2000?q=80&w=400&h=400&auto=format&fit=crop', word: 'مروحية', value: 'مروحية' },
    ]
  }
};

export const BG_COLORS = [
  'bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-pink-100', 'bg-purple-100', 'bg-orange-100'
];
