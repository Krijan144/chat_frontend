import React from 'react'

const TextContainer = ({ users }) => {
    return (
        <div style={{ backgroundColor: 'rebeccapurple', color: 'white' }} className="col-2">
            {
                users
                    ? (
                        <div>
                            <h3>Online:</h3>
                            <div className="activeContainer">
                                <p>
                                    {users.map(({ username }) => (
                                        <div key={username} className="activeItem text-center">
                                            {username}
                                        </div>
                                    ))}
                                </p>
                            </div>
                        </div>
                    )
                    : null
            }

        </div>
    )
}

export default TextContainer
