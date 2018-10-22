/**
 * Created by jianghai on 2018/10/22.
 */

const chapterIdToName = (chapterId='') => {
  switch (chapterId){
  case 'chapter1':{
    return '第一章';
  }
  case 'chapter2':{
    return '第二章';
  }
  case 'chapter3':{
    return '第三章';
  }
  case 'chapter4':{
    return '第四章';
  }
  case 'chapter5':{
    return '第五章';
  }
  case 'chapter6':{
    return '第六章';
  }
  case 'chapter7':{
    return '第七章';
  }
  case 'chapter8':{
    return '第八章';
  }
  case 'chapter9':{
    return '第九章';
  }
  case 'chapter10':{
    return '第十章';
  }
  case 'chapter11':{
    return '第十一章';
  }
  case 'chapter12':{
    return '第十二章';
  }
  case 'chapter13':{
    return '第十三章';
  }
  }
  return '';
};

export default chapterIdToName;