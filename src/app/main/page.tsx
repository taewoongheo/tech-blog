import { getAllPostPath } from './util/getPostPath';

const Main = (): React.ReactElement => {
  const allPostPaths = getAllPostPath().then((el) => console.log(el));
  console.log(allPostPaths);
  return (
    <div
      style={{
        background: 'blue',
        width: '50%',
      }}
    >
      <h1>hi</h1>
    </div>
  );
};

export default Main;
