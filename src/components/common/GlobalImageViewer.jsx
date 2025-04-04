// src/components/common/GlobalImageViewer.jsx
import React, { useState, useEffect } from 'react';
import Viewer from 'react-viewer';

const GlobalImageViewer = () => {
  const [visible, setVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    // 函数处理图片点击事件
    const handleImageClick = (e) => {
      // 检查点击的是否是图片元素
      if (e.target.tagName.toLowerCase() === 'img') {
        // 忽略某些不应该放大的图片，如小图标等
        if (e.target.classList.contains('no-zoom') || 
            e.target.width < 50 || 
            e.target.height < 50) {
          return;
        }
        
        // 设置当前图片并显示查看器
        setCurrentImage({
          src: e.target.src,
          alt: e.target.alt || 'Image'
        });
        setVisible(true);
        
        // 阻止事件冒泡
        e.stopPropagation();
      }
    };

    // 给文档添加点击事件监听器
    document.addEventListener('click', handleImageClick);

    // 清理函数
    return () => {
      document.removeEventListener('click', handleImageClick);
    };
  }, []);

  return (
    <Viewer
      visible={visible}
      onClose={() => setVisible(false)}
      images={currentImage ? [currentImage] : []}
      zIndex={2000}
      noNavbar={true}
    />
  );
};

export default GlobalImageViewer;
