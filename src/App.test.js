import React from 'react';
import { render, wait } from '@testing-library/react';
import { fetchShow as mockFetchShow } from './api/api';
import App from "./App";

jest.mock('./api/api');

// 

test("App fetches missions data and render data", async () => {
    mockFetchShow.mockResolvedValueOnce(seasons);

    const { getByText, queryAllByTestId, getByTestId } = render(<App />);

    getByText(/season , episode/i);
    await wait(() => {
        getByTestId('episodes');
    })
    expect(queryAllByTestId('episode-runtime')).toHaveLength(10);
})