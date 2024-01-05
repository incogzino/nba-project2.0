import React, {ReactNode} from 'react';

interface ScrollProps{
    children: ReactNode;
}

const Scroll: React.FC<ScrollProps> = ({children}) => {

  return( 
    <div data-testId='mock-scroll' style={{overflowY: 'scroll', height:'70vh'}}>
      {children}
    </div>	
  );
}

export default Scroll;