import LayoutContainer from '@/components/layouts/layout-main';
import { NextPage } from 'next';

const PromiseClientPage: NextPage = () => {
  return (
    <LayoutContainer>
      <div className="max-w-7xl mx-auto px-8 py-4 md:px-4 ">
        <div className="prose prose sm:prose-lg md:prose-xl text-justify">
          <h2 className="text-center capitalize">
            Nuestro compromiso con el cliente
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            quia suscipit dolore accusamus qui repellat deserunt porro, delectus
            facilis praesentium cupiditate odio illum culpa atque a debitis,
            animi perspiciatis! Consequuntur!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            quia suscipit dolore accusamus qui repellat deserunt porro, delectus
            facilis praesentium cupiditate odio illum culpa atque a debitis,
            animi perspiciatis! Consequuntur!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
            quia suscipit dolore accusamus qui repellat deserunt porro, delectus
            facilis praesentium cupiditate odio illum culpa atque a debitis,
            animi perspiciatis! Consequuntur!
          </p>
        </div>
      </div>
    </LayoutContainer>
  );
};

export default PromiseClientPage;
