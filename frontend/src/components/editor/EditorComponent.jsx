import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

// import Context from '@ckeditor/ckeditor5-core/src/context';

// const editorConfiguration = {
//   toolbar: {
//     items: [
//       'heading',
//       '|',
//       'fontSize',
//       'fontFamily',
//       '|',
//       'bold',
//       'italic',
//       'underline',
//       'strikethrough',
//       'highlight',
//       '|',
//       'alignment',
//       '|',
//       'numberedList',
//       'bulletedList',
//       '|',
//       'indent',
//       'outdent',
//       '|',
//       'todoList',
//       'link',
//       'blockQuote',
//       'imageUpload',
//       'insertTable',
//       'mediaEmbed',
//       '|',
//       'undo',
//       'redo',
//       'pageBreak',
//     ],
//   },
//   language: 'ko',
//   image: {
//     toolbar: ['imageTextAlternative', 'imageStyle:full', 'imageStyle:side'],
//   },
//   table: {
//     contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
//   },
//   pagination: {
//     // A4
//     pageWidth: '21cm',
//     pageHeight: '29.7cm',

//     pageMargins: {
//       top: '20mm',
//       bottom: '20mm',
//       left: '12mm',
//       right: '12mm',
//     },
//   },
// };
const editorConfiguration = {
  plugins: [Essentials, Paragraph, Bold, Italic],
  toolbar: [
    'heading',
    '|',
    'fontSize',
    'fontFamily',
    '|',
    'bold',
    'italic',
    'underline',
    'strikethrough',
    'highlight',
    '|',
    'alignment',
    '|',
    'numberedList',
    'bulletedList',
    '|',
    'indent',
    'outdent',
    '|',
    'todoList',
    'link',
    'blockQuote',
    'imageUpload',
    'insertTable',
    'mediaEmbed',
    '|',
    'undo',
    'redo',
    'pageBreak',
  ],
  heading: {
    options: [
      {
        model: 'paragraph',
        view: 'p',
        title: '본문',
        class: 'ck-heading_paragraph',
      },
      {
        model: 'heading1',
        view: 'h1',
        title: '헤더1',
        class: 'ck-heading_heading1',
      },
      {
        model: 'heading2',
        view: 'h2',
        title: '헤더2',
        class: 'ck-heading_heading2',
      },
      {
        model: 'heading3',
        view: 'h3',
        title: '헤더3',
        class: 'ck-heading_heading3',
      },
    ],
  },
  fontSize: {
    options: [9, 10, 11, 12, 13, 14, 15],
  },
  alignment: {
    options: ['justify', 'left', 'center', 'right'],
  },
  table: {
    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
  },
  image: {
    resizeUnit: 'px',
    toolbar: [
      'imageStyle:alignLeft',
      'imageStyle:full',
      'imageStyle:alignRight',
      '|',
      'imageTextAlternative',
    ],
    styles: ['full', 'alignLeft', 'alignRight'],
  },
  typing: {
    transformations: {
      remove: ['enDash', 'emDash', 'oneHalf', 'oneThird', 'twoThirds', 'oneForth', 'threeQuarters'],
    },
  },
  placeholder: '글을 입력해보세요!',
};

const EditorComponent = () => (
  <CKEditor
    editor={ClassicEditor}
    config={editorConfiguration}
    data="<p>업로드 내용을 입력해주세요!</p>"
    onReady={(editor) => {
      // You can store the "editor" and use when it is needed.
      console.log('Editor1 is ready to use!', editor);
      editor.ui
        .getEditableElement()
        .parentElement.parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement().parentElement,
        );
    }}
    onChange={(event, editor) => {
      const data = editor.getData();
      console.log(data);
    }}
  />
);

export default EditorComponent;
