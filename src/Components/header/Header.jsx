import React from 'react'

const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-warning">
                <div class="container">
                    <a class="navbar-brand" href="#12">
                        <img src='./assets/images/todo.png' alt='brand' height={50} width={50} />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto text-white">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#12">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#12">Link</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#12" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>

                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#no" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav></>
    )
}

export default Header