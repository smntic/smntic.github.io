'use client';

import { useState } from 'react';
import CardList from './CardList';
import { Dropdown } from './Dropdown';

interface FilteredCardListProps<T extends { title: string; tags?: string[] }> {
  cards: React.ReactNode[];
  frontmatters: T[];
}

export default function FilteredCardList<T extends { title: string; tags?: string[] }>({
  cards,
  frontmatters,
}: FilteredCardListProps<T>) {
  const [search, setSearch] = useState('');
  const [tag, setTag] = useState('');

  const allTags = Array.from(new Set(frontmatters.flatMap((fm) => fm.tags || []))).sort();

  const filteredIndices = frontmatters
    .map((fm, idx) => ({ fm, idx }))
    .filter(({ fm }) => {
      const matchesTitle = fm.title.toLowerCase().includes(search.toLowerCase());
      const matchesTag =
        !tag || (fm.tags && fm.tags.some((t) => t.toLowerCase() === tag.toLowerCase()));
      return matchesTitle && matchesTag;
    })
    .map(({ idx }) => idx);

  const clearFilters = () => {
    setSearch('');
    setTag('');
  };

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search title..."
          className="flex-1 min-w-0 bg-panel-dark p-2 rounded hover:ring-2 hover:ring-panel-light transition"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="w-40">
          <Dropdown value={tag} options={allTags} onChange={setTag} />
        </div>

        <button
          type="button"
          onClick={clearFilters}
          className="px-3 bg-panel-dark hover:bg-panel-light transition rounded cursor-pointer"
        >
          Clear
        </button>
      </div>

      <CardList>
        {filteredIndices.length ? (
          filteredIndices.map((i) => cards[i])
        ) : (
          <span className="text-center text-very-muted">No results.</span>
        )}
      </CardList>
    </div>
  );
}
