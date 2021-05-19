<template>
    <div id="app">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    </div>
</template>

<script>
// ⚠️ NOTE: We don't use @ckeditor/ckeditor5-build-classic any more!
// Since we're building CKEditor from source, we use the source version of ClassicEditor.
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials';
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold';
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic';
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link';
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import MathType from '@wiris/mathtype-ckeditor5';

export default {
    name: 'app',
    data() {
        return {
            editorData: '<p>Content of the editor.</p>',
        };
    },
    computed: {
        editor :() => ClassicEditor,
        editorConfig() {
            return{
                plugins: [
                    EssentialsPlugin,
                    BoldPlugin,
                    ItalicPlugin,
                    LinkPlugin,
                    ParagraphPlugin,
                    MathType
                ],
                toolbar: {
                    items: [
                        'bold',
                        'italic',
                        'link',
                        'undo',
                        'redo',
                        'mathType',
                        'chemType'
                    ]
                }
            }
        }
    }
}
</script>
