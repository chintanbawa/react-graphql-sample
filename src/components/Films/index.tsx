import { useAllFilmsQuery} from '../../generated'

const Films = () => {
    const {isLoading,isError,error, data} = useAllFilmsQuery()
    
    return (
        <>
        {isLoading && <p>Loading ...</p>}
        {isError && <p>{error.message}</p>}
        {data &&
            data.allFilms?.films?.map(film => (
                <div key={film?.releaseDate}>
                    <p>{film?.title}</p>
                    <hr />
                </div>
            ))}
    </>
    )
}

export default Films