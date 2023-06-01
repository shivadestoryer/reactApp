import React, { useState } from 'react';

import DataComponent from './DataComponent';

const ButtonComponent = () => {
    const [showComponent, setShowComponent] = useState(false);

    const handleClick = () => {
        setShowComponent(true);
    };

    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
            {showComponent && <DataComponent />}
        </div>
    );
};

export default ButtonComponent;
