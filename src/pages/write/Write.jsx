import { useContext, useState } from 'react';
import './write.css';
import axios from 'axios';
import { Context } from '../../context/Context';

export default function Write() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;
      try {
        await axios.post('/upload', data);
      } catch (err) {}
    }
    try {
      const res = await axios.post('/posts', newPost);
      window.location.replace('/post/' + res.data._id);
    } catch (err) {}
  };
  return (
    <div className='write'>
      {file && (
        <img className='writeImg' src={URL.createObjectURL(file)} alt='' />
      )}
      <form className='writeForm' onSubmit={handleSubmit}>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fas fa-plus'></i>
          </label>
          <input
            type='file'
            id='fileInput'
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type='text'
            placeholder='Title'
            className='writeInput'
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='writeFormGroup'>
          <textarea
            placeholder='Tell your story...'
            type='text'
            className='writeInput writeText'
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className='writeSubmit' type='submit'>
          Publish
        </button>
      </form>
    </div>
  );
}
// import JoditEditor from 'jodit-react';
// import './write.css';
// import thumbnail from '../../assets/post-test.jpg';
// import { useContext, useState } from 'react';
// import { Context } from '../../context/Context';
// import axios from 'axios';

// function Write() {
//   const [title, setTitle] = useState('');
//   const [desc, setDesc] = useState('');
//   const [file, setFile] = useState(null);
//   const { user } = useContext(Context);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newPost = {
//       username: user.username,
//       title,
//       desc,
//     };
//     if (file) {
//       const data = new FormData();
//       const filename = Date.now() + file.name;
//       data.append('name', filename);
//       data.append('file', file);
//       newPost.photo = filename;
//       try {
//         await axios.post('/upload', data);
//       } catch (err) {}
//     }
//     try {
//       const res = await axios.post('/posts', newPost);
//       window.location.replace('/post/' + res.data._id);
//     } catch (err) {}
//   };
//   return (
//     <div className='container'>
//       <div className='write'>
//         {file && (
//           <img className='thumbnail' src={URL.createObjectURL(file)} alt=''/>
//         )}
//         <form className='writeForm' onSubmit={handleSubmit}>
//           <div className='writeFormGroup'>
//             <div>
//               <label htmlFor='fileInput'>
//                 <i class='fa-solid fa-circle-plus writeIcon'></i>
//               </label>
//             </div>
//             <input
//               type='file'
//               id='fileInput'
//               style={{ display: 'none' }}
//               onChange={(e) => setFile(e.target.files[0])}
//             />
//             <input
//               type='text'
//               placeholder='Enter Post Title'
//               className='writeInput'
//               autoFocus='true'
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </div>
//           <div className='writeFormGroup'>
//             <div className='writeInput writeText'>
//               {/* <div ref={quillRef} /> */}
//               <JoditEditor onChange={(e) => setDesc(e.target.value)} />
//             </div>
//           </div>
//           <button className='writeSubmit btn btn-success' type='submit'>
//             Publish
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Write;
