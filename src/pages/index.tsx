import { Meta } from '@/components/layouts/Meta';
import { Main } from '@/components/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Shrent Web app"
          description="Id fugiat sint in anim cupidatat veniam veniam proident incididunt cillum irure. Sunt esse voluptate exercitation excepteur nisi deserunt ut Lorem ipsum deserunt consequat quis. Elit est in pariatur irure duis esse esse in enim."
        />
      }
    >
      <h1>Home Page</h1>
      <p>home page content here...</p>
    </Main>
  );
};

export default Index;
