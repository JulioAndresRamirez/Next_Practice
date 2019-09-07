import React, { Component } from "react";
import "isomorphic-fetch";
import Link from "next/link";
import Error from "./_error";
//Component
import Layout from "../components/Layout";
import ChannelGrid from "../components/ChannelGrid";

export default class Index extends Component {
    static async getInitialProps({ res }) {
        try {
            let req = await fetch(
                "https://api.audioboom.com/channels/recommended"
            );
            let { body: channels } = await req.json();
            return { channels, statusCode: 200 };
        } catch (e) {
            res.statusCode = 503;
            return { channel: null, statusCode: 503 };
        }
    }

    render() {
        const { channels, statusCode } = this.props;

        if (statusCode != 200) {
            return <Error statusCode={statusCode} />;
        }

        return (
            <Layout title="Podcats">
                <ChannelGrid channels={channels} />
            </Layout>
        );
    }
}
