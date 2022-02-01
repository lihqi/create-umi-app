import useUrlState from '@ahooksjs/use-url-state';

import { Input } from 'antd';

const initialState = {
  search: '',
  page: 1,
  size: 10,
};
const App = () => {
  const [state, setState] = useUrlState({ ...initialState });
  console.log(JSON.stringify(state));

  return (
    <Input
      allowClear={true}
      placeholder="why"
      onPressEnter={(e) => {
        const val = e.currentTarget.value;

        setState({
          search: val,
        });
      }}
    />
  );
};

export default App;
