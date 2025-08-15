import FilteredCardList from './FilteredCardList';

type ListLoader<T> = () => { slug: string; frontmatter: T }[];

export function makeMdxListPage<T extends { title: string }>(
  getAllPosts: ListLoader<T>,
  renderCard: (post: { slug: string; frontmatter: T }) => React.ReactNode,
  intro: React.ReactNode,
) {
  return function MdxListPage() {
    const posts = getAllPosts();

    const cards = posts.map(renderCard);
    const frontmatters = posts.map((p) => p.frontmatter);

    return (
      <>
        {intro}
        <FilteredCardList cards={cards} frontmatters={frontmatters} />
      </>
    );
  };
}
