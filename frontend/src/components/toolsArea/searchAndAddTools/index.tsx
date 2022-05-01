import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import AddToolModal from '../../addToolModal';
import { useTools } from '../../hooks/useTools';
import { Container } from './styles';



ReactModal.setAppElement('#root')

export function SearchAndAddTools(){
  const {searchTools} = useTools();
  const [text, setText] = useState('');
  const [searchTag, setSearchTag] = useState(false);
  
  const [isAddToolModal, setIsAddToolModal] = useState(false);
  
 
  useEffect( 
    function searchTool(){
    if (searchTag){
      searchTools(`?tags_like=${text}`)
    }else{
      searchTools(`?q=${text}`)
    }
  },[text,searchTag])
  



  function handleOpenAddToolModal(){
    setIsAddToolModal(true)
  }
  function handleCloseAddToolModal(){
    setIsAddToolModal(false)
  }

  return (
    <>
      <Container>
        <div>
          <input 
            className="search" 
            placeholder="Search" 
            type="string"
            onChange={ event => setText(event.target.value) }
          />
          
          <input 
            type="checkbox" 
            name="searchTag" 
            id="searchTag" 
            defaultChecked={false} 
            onChange={ event=> setSearchTag(event.target.checked)}
          />
          <label htmlFor="searchTag" > Search in tags only</label>
        </div>


        <button onClick={handleOpenAddToolModal}>
          + Add
        </button>
      </Container>
      <AddToolModal
        isOpen={isAddToolModal}
        onRequestClose={handleCloseAddToolModal}
      />
    </>
  );
}