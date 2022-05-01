import { useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import Modal from 'react-modal';
import { useTools } from '../hooks/useTools';
import { ToolInput } from '../types/tools';
import { Container } from './styles';



interface AddToolModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}



function AddToolModal({ isOpen, onRequestClose }: AddToolModalProps) {
  const { addTools } = useTools();
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  function handleCreateNewTool() {
    const tagsArray = tags.split(',').map(tag => tag.trim());
    const toll:ToolInput = {
      title,
      link,
      description,
      tags: tagsArray,
    };
    addTools(toll);
    onRequestClose();
  }


 
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={'react-modal-overlay'}
      className={'react-modal-content'}
    >
      
  


      <Container onSubmit={handleCreateNewTool}>
        <VscChromeClose  onClick={onRequestClose} className='react-modal-close' />
          <h2>Create new tool</h2>

          <div>

            <div>
              <p>Title</p>
              <input 
                onChange={
                  event => setTitle(event.target.value)
                  } 
                  type="text" name="title" 
                  
                    id="title" 
                  placeholder={'Digite um valor para o titulo'} />
            </div>
            <div>
              <p>Link</p>
              <input
                onChange={
                  event => setLink(event.target.value)
                  }
                  type="text" name="link"
                  id="link"
                  placeholder={'Digite um valor para o link'} />
            </div>
            <div >
              <p className='description'> Description</p>
              <input type="text"
                onChange={
                  event => setDescription(event.target.value)
                  }
                  className='description'
                  name="description"
                  id="description"
                  placeholder={'Digite um valor para a descrição'} />
            </div>
            <div>
              <p>Tags</p>
                <input
                onChange={
                  event => setTags(event.target.value)
                }
                type="text" name="tags"
                id="tags"
                placeholder={'Digite um valor para as tags'} />
            </div>
            <div>
              <button onClick={handleCreateNewTool}>
                <span>Create</span>
              </button>
            </div>
          </div>
        </Container>
    </Modal>
  );
}

export default AddToolModal


