import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuillEditor = (props) => {
  const { value, onChange } = props;
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link', 'image', 'video'],
      [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'align',
    'color',
    'background',
  ];

  return (
    <div style={{ height: '650px' }}>
      <ReactQuill
        style={{ height: '600px' }}
        theme="snow"
        modules={modules}
        formats={formats}
        value={value || ''}
        onChange={(content, delta, source, editor) => onChange(editor.getHTML())}
      />
    </div>
  );
};

export default QuillEditor;
