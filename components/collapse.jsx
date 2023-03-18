import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const CollapsibleView = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View>
      <Text style={{color:'#818385',
        fontSize:15}} numberOfLines={isExpanded ? null : 10}>{text}</Text>
      {text.length > 30 && (
        <TouchableOpacity onPress={toggleText}>
          <Text style={{color:'#b9352b',
        fontSize:15}}>{isExpanded ? 'Read Less' : 'Read More'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CollapsibleView;
