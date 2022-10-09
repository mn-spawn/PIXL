import React from 'react'

function ReviewState({parentToChild}) {
        return (
            <div>
                <h1>This is review state</h1>
                {parentToChild}
            </div>
          )
}

export default ReviewState