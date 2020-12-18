import { Row, Col, Input } from "antd";
import { searcthMovieBykeyWord } from '../../redux/movie/action'
import { useDispatch } from 'react-redux'
const { Search } = Input;
export default function SearchMoive() {
    const dispatch = useDispatch()
    const searchFilms = (name) => { dispatch(searcthMovieBykeyWord(name)) }
    return (
        <>
            <Row>
                <Col span="12" offset={6}>
                    <h1 style={{ textAlign: "center" }}> Tim kiem phim yeu thisch </h1>
                </Col>
            </Row>
            <Row>
                <Col span="18" offset={3}>
                    <Search
                        placeholder="Enter name'smovie"
                        onSearch={(val) => searchFilms(val)}
                        enterButton
                    />
                </Col>
            </Row>
        </>
    );
}