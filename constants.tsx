
import { PuzzleItem, GameMode } from './types';

export const CATEGORIES = {
  ANIMALS: {
    name: 'الحيوانات',
    items: [
      { id: '1', image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=400&h=400&auto=format&fit=crop', word: 'قطة', value: 'قطة' },
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
      { id: 'n2', image: 'https://images.unsplash.com/photo-1563223552-30d01fda3ead?q=80&w=400&h=400&auto=format&fit=crop', word: 'اثنان', value: 2 },
      { id: 'n3', image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=400&h=400&auto=format&fit=crop', word: 'ثلاثة', value: 3 },
      { id: 'n4', image: 'https://images.unsplash.com/photo-1502472545332-e24162e3b2d3?q=80&w=400&h=400&auto=format&fit=crop', word: 'أربعة', value: 4 },
      { id: 'n5', image: 'https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=400&h=400&auto=format&fit=crop', word: 'خمسة', value: 5 },
      { id: 'n6', image: 'https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?q=80&w=400&h=400&auto=format&fit=crop', word: 'ستة', value: 6 },
      { id: 'n7', image: 'https://images.unsplash.com/photo-1511216113906-8f57bb83e776?q=80&w=400&h=400&auto=format&fit=crop', word: 'سبعة', value: 7 },
      { id: 'n8', image: 'https://images.unsplash.com/photo-1493612216891-65cbf3b5c420?q=80&w=400&h=400&auto=format&fit=crop', word: 'ثمانية', value: 8 },
      { id: 'n9', image: 'https://images.unsplash.com/photo-1599305090598-fe179d501c27?q=80&w=400&h=400&auto=format&fit=crop', word: 'تسعة', value: 9 },
    ]
  },
  FRUITS: {
    name: 'الفواكه',
    items: [
      { id: 'f1', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=400&h=400&auto=format&fit=crop', word: 'تفاح', value: 'تفاح' },
      { id: 'f2', image: 'https://images.unsplash.com/photo-1571771894821-ad996211fdf4?q=80&w=400&h=400&auto=format&fit=crop', word: 'موز', value: 'موز' },
      { id: 'f3', image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?q=80&w=400&h=400&auto=format&fit=crop', word: 'برتقال', value: 'برتقال' },
      { id: 'f4', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=400&h=400&auto=format&fit=crop', word: 'فراولة', value: 'فراولة' },
      { id: 'f5', image: 'https://images.unsplash.com/photo-1589927986089-35812388d1f4?q=80&w=400&h=400&auto=format&fit=crop', word: 'بطيخ', value: 'بطيخ' },
      { id: 'f6', image: 'https://images.unsplash.com/photo-1528825831134-47c11d24a73b?q=80&w=400&h=400&auto=format&fit=crop', word: 'عنب', value: 'عنب' },
      { id: 'f7', image: 'https://images.unsplash.com/photo-1550258114-b834e7233e5d?q=80&w=400&h=400&auto=format&fit=crop', word: 'أناناس', value: 'أناناس' },
      { id: 'f8', image: 'https://images.unsplash.com/photo-1528821128474-27f9e7785893?q=80&w=400&h=400&auto=format&fit=crop', word: 'كرز', value: 'كرز' },
      { id: 'f9', image: 'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&w=400&h=400&auto=format&fit=crop', word: 'كمثرى', value: 'كمثرى' },
    ]
  },
  SHAPES: {
    name: 'الأشكال',
    items: [
      { id: 's1', image: 'https://images.unsplash.com/photo-1502691876148-a84978f5dfa8?q=80&w=400&h=400&auto=format&fit=crop', word: 'دائرة', value: 'دائرة' },
      { id: 's2', image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=400&h=400&auto=format&fit=crop', word: 'مربع', value: 'مربع' },
      { id: 's3', image: 'https://images.unsplash.com/photo-1543857182-6804da77939b?q=80&w=400&h=400&auto=format&fit=crop', word: 'مثلث', value: 'مثلث' },
      { id: 's4', image: 'https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?q=80&w=400&h=400&auto=format&fit=crop', word: 'نجمة', value: 'نجمة' },
      { id: 's5', image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=400&h=400&auto=format&fit=crop', word: 'قلب', value: 'قلب' },
      { id: 's6', image: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=400&h=400&auto=format&fit=crop', word: 'مستطيل', value: 'مستطيل' },
      { id: 's7', image: 'https://images.unsplash.com/photo-1543857182-6804da77939b?q=80&w=400&h=400&auto=format&fit=crop', word: 'خماسي', value: 'خماسي' },
      { id: 's8', image: 'https://images.unsplash.com/photo-1591871937573-74dbba515c4c?q=80&w=400&h=400&auto=format&fit=crop', word: 'سداسي', value: 'سداسي' },
      { id: 's9', image: 'https://images.unsplash.com/photo-1582230228104-ee2c33c3997d?q=80&w=400&h=400&auto=format&fit=crop', word: 'معين', value: 'معين' },
    ]
  },
  TRANSPORTATION: {
    name: 'وسائل النقل',
    items: [
      { id: 't1', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=400&h=400&auto=format&fit=crop', word: 'سيارة', value: 'سيارة' },
      { id: 't2', image: 'https://images.unsplash.com/photo-1474487097639-12ba01ff7a3e?q=80&w=400&h=400&auto=format&fit=crop', word: 'قطار', value: 'قطار' },
      { id: 't3', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?q=80&w=400&h=400&auto=format&fit=crop', word: 'طائرة', value: 'طائرة' },
      { id: 't4', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=400&h=400&auto=format&fit=crop', word: 'حافلة', value: 'حافلة' },
      { id: 't5', image: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=400&h=400&auto=format&fit=crop', word: 'دراجة نارية', value: 'دراجة نارية' },
      { id: 't6', image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=400&h=400&auto=format&fit=crop', word: 'سفينة', value: 'سفينة' },
      { id: 't7', image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=400&h=400&auto=format&fit=crop', word: 'دراجة', value: 'دراجة' },
      { id: 't8', image: 'https://images.unsplash.com/photo-1566367576585-051277d52997?q=80&w=400&h=400&auto=format&fit=crop', word: 'شاحنة', value: 'شاحنة' },
      { id: 't9', image: 'https://images.unsplash.com/photo-1534067783941-51c9c23eccfd?q=80&w=400&h=400&auto=format&fit=crop', word: 'مروحية', value: 'مروحية' },
    ]
  }
};

export const BG_COLORS = [
  'bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-pink-100', 'bg-purple-100', 'bg-orange-100'
];
