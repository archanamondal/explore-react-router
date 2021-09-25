import React from 'react'
import { useParams } from 'react-router'

function ProjectDetails() {
    const params = useParams()
    return (
        <div>
            <h2>ProjectDetails {params.id}</h2>
        </div>
    )
}

export default ProjectDetails
