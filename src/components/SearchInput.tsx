import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { RemoveFromQueueOutlined } from '@mui/icons-material';
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchInput = ({onSearch}: Props) => {
  const ref = useRef<HTMLInputElement>(null)
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        console.log(ref.current.value)
        
        if (ref.current) onSearch(ref.current.value);

      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search Games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  )
}

export default SearchInput
