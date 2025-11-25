'use client'
import { Editor } from '@tinymce/tinymce-react';
import { useState, useRef, useEffect } from 'react';
interface AppTinyMceProps {
    onContentChange: (content: string) => void;
}
const AppTinyMce: React.FC<AppTinyMceProps> = ({ onContentChange }) => {
    const handleEditorChange = (content: string) => {
        onContentChange(content)
    };
    return (
        <Editor
            apiKey="zqehe5wmr4c69yfxky8qujm6w5v91fbg02yenivy6y90xn65"
            initialValue=""
            init={{
                height: 400,
                menubar: false,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount',
                ],
                toolbar:
                    'undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help',
            }}
            onEditorChange={handleEditorChange}
        />
    )
}
export default AppTinyMce