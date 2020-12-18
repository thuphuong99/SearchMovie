import { Row, Col, Card, Skeleton } from "antd";
import { useSelector } from 'react-redux'
import * as reselect from '../../redux/movie/reselect'
import { createStructuredSelector } from 'reselect'
import Link from 'next/link'
import slugify from 'react-slugify';

const { Meta } = Card;

export default function ListMoive() {
    const { loading, movies } = useSelector
        (createStructuredSelector({
            loading: reselect.loadingSearch,
            movies: reselect.dataSreachMoives
        }))
    return (
        <>
            <Row style={{ margin: "20px 0px" }}>
                {loading && (<Skeleton active />)}
                {movies ? movies.map((item, index) => (

                    <Col key={index} style={{ marginTop: "15px" }} span={4}>
                        <Link href={`watch/${slugify(item.title)}/${item.id}`}>
                            <a>
                                <Card
                                    hoverable
                                    style={{ width: 200 }}
                                    cover={
                                        <img
                                            alt="example"
                                            src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                                        />
                                    }
                                >
                                    <Meta title="Europe Street beat" />
                                </Card>
                            </a>
                        </Link>

                    </Col>
                )) : null}

            </Row>
        </>
    );
}
