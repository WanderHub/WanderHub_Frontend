export const accompanyPostInputs: Array<{
  htmlFor: string;
  labelText: string;
  placeholder: string;
  type:
    | 'text'
    | 'number'
    | 'password'
    | 'email'
    | 'tel'
    | 'url'
    | 'date'
    | 'time'
    | 'checkbox'
    | 'radio'
    | 'file';
}> = [
  {
    htmlFor: 'nickname',
    labelText: '닉네임',
    placeholder: '닉네임을 입력하세요',
    type: 'text',
  },
  {
    htmlFor: 'maxPeople',
    labelText: '최대인원',
    placeholder: '숫자를 입력해주세요.',
    type: 'number',
  },
  {
    htmlFor: 'location',
    labelText: '장소',
    placeholder: '리드온리 모달',
    type: 'text',
  },
  {
    htmlFor: 'title',
    labelText: '제목',
    placeholder: '제목을 입력하세요',
    type: 'text',
  },
  {
    htmlFor: 'content',
    labelText: '내용',
    placeholder: '텍스트에이리아',
    type: 'text',
  },
];
