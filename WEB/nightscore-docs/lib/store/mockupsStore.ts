import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { BlockId } from '../docs/mockups-data';

export type ViewTab = 'grid' | 'flow';
export type GridDensity = 'compact' | 'spacious';

interface MockupsState {
  activeBlock: BlockId | 'keyscreens';
  openedScreenId: string | null;
  activeTab: ViewTab;
  searchQuery: string;
  selectedTags: string[];
  
  setActiveBlock: (block: BlockId | 'keyscreens') => void;
  setOpenedScreen: (screenId: string | null) => void;
  setActiveTab: (tab: ViewTab) => void;
  setSearchQuery: (query: string) => void;
  toggleTag: (tag: string) => void;
  clearFilters: () => void;
}

export const useMockupsStore = create<MockupsState>()((set) => ({
  activeBlock: 'onboarding',
  openedScreenId: null,
  activeTab: 'grid',
  searchQuery: '',
  selectedTags: [],

  setActiveBlock: (block) => set({ activeBlock: block, selectedTags: [] }),
  setOpenedScreen: (screenId) => set({ openedScreenId: screenId }),
  setActiveTab: (tab) => set({ activeTab: tab }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  toggleTag: (tag) => set((state) => ({
    selectedTags: state.selectedTags.includes(tag)
      ? state.selectedTags.filter((t) => t !== tag)
      : [...state.selectedTags, tag]
  })),
  clearFilters: () => set({ searchQuery: '', selectedTags: [] }),
}));

interface PersistedState {
  gridDensity: GridDensity;
  setGridDensity: (density: GridDensity) => void;
}

export const useMockupsPreferences = create<PersistedState>()(
  persist(
    (set) => ({
      gridDensity: 'spacious',
      setGridDensity: (density) => set({ gridDensity: density }),
    }),
    {
      name: 'ns-mockups-preferences',
    }
  )
);
