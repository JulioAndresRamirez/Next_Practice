import React, { Component } from "react";
import Error from "./_error";
//Components
import Layout from "../components/Layout";
import PodcastItem from "../components/PodcastItem";

export default class channel extends Component {
    static async getInitialProps({ query, res }) {
        let idChannel = query.id;

        try {
            let [reqChannel, reqSeries, reqAudios] = await Promise.all([
                fetch(`https://api.audioboom.com/channels/${idChannel}`),
                fetch(
                    `https://api.audioboom.com/channels/${idChannel}/child_channels`
                ),
                fetch(
                    `https://api.audioboom.com/channels/${idChannel}/audio_clips`
                )
            ]);

            if (reqChannel.status >= 400) {
                res.statusCode = reqChannel.status;
                return {
                    channel: null,
                    audiosClips: null,
                    series: null,
                    statusCode: reqChannel.status
                };
            }

            let dataChannel = await reqChannel.json();
            let channel = dataChannel.body.channel;

            let dataSeries = await reqSeries.json();
            let series = dataSeries.body.channels;

            let dataAudios = await reqAudios.json();
            let audiosClips = dataAudios.body.audio_clips;

            return { channel, audiosClips, series, statusCode: 200 };
        } catch (e) {
            return {
                channel: null,
                audiosClips: null,
                series: null,
                statusCode: 503
            };
        }
    }

    render() {
        const { channel, audiosClips, series, statusCode } = this.props;

        if (statusCode != 200) {
            return <Error statusCode={statusCode} />;
        }

        return (
            <Layout title={`${channel.title}`}>
                <div
                    className="banner"
                    style={{
                        backgroundImage: `url(${channel.urls.banner_image.original})`
                    }}
                />

                <div className="information">
                    <div className="title">
                        <img src="/static/podcast-solid.svg" alt="podcasts" />
                        <h1>{channel.title}</h1>
                    </div>

                    <h2>Ultimos podcasts</h2>
                    {audiosClips.map(clip => {
                        return <PodcastItem clip={clip} />;
                    })}

                    <h2>Series</h2>

                    {series.map(serie => {
                        return (
                            <div key={serie.id} className="subseries">
                                {serie.title}
                            </div>
                        );
                    })}
                </div>

                <style jsx>{`
                    

                    .information {
                        padding: 20px;
                    }

                    .title {
                        display: flex;
                        justify-content: flex-start;
                    }

                    .title img {
                        margin-right: 10px;
                        width: 40px;
                    }

                    .banner {
                        width: 100%;
                        padding-bottom: 25%;
                        background-position: 50% 50%;
                        background-size: cover;
                        background-color: #aaa;
                    }

                    

                    .subseries {
                        background: white;
                        padding: 8px 8px;
                        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.246);
                        border-radius: 4px;
                        margin-bottom: 10px;
                        display: grid:

                    }
                `}</style>
            </Layout>
        );
    }
}
