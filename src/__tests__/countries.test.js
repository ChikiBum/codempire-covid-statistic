import React from "react";
import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Countries } from "../pages/Countries";

describe('Countries get data', () => {
    test('loading', async () => {
        render(<Countries />);
        
        // screen.debug();
        const loader = screen.getByTestId('country-loader');
        expect(loader).toBeInTheDocument();

        await waitForElementToBeRemoved(loader);
    });

    test('success table loading', async () => {
        render(<Countries />);
        
        const loader = screen.getByTestId('country-loader');
        await waitForElementToBeRemoved(loader);
        
        expect(loader).not.toBeInTheDocument();
        expect(screen.getByTestId('country-table-container')).toBeInTheDocument();
        
    });

    test('success search window loading', async () => {
        render(<Countries />);
        
        const loader = screen.getByTestId('country-loader');
        await waitForElementToBeRemoved(loader);
        
        expect(loader).not.toBeInTheDocument();
        expect(screen.getByTestId('search-window')).toBeInTheDocument();
        
    });
});

describe('Modal window', () => {
    test('open', async () => {
        render(<Countries />);
    
        const loader = screen.getByTestId('country-loader');
        expect(loader).toBeInTheDocument();

        await waitForElementToBeRemoved(loader);
        expect(loader).not.toBeInTheDocument();

        const tablecell = screen.getByTestId('table-cell1');
        expect(tablecell).toBeInTheDocument();

        userEvent.click(screen.getByTestId('table-cell1'));

        const modalWindow = screen.getByTestId('modal-window');
        expect(modalWindow).toBeInTheDocument();

        
    });

    test('close', async () => {
        render(<Countries />);
    
        const loader = screen.getByTestId('country-loader');
        expect(loader).toBeInTheDocument();

        await waitForElementToBeRemoved(loader);
        expect(loader).not.toBeInTheDocument();

        const tablecell = screen.getByTestId('table-cell1');
        expect(tablecell).toBeInTheDocument();

        userEvent.click(tablecell);

        const modalWindow = screen.getByTestId('modal-window');
        expect(modalWindow).toBeInTheDocument();

        userEvent.click(screen.getByTestId('modal-close'));
        expect(modalWindow).not.toBeInTheDocument();
    });
    
});

describe('Sorting field ', () => {
    test('Check sorting on click "Coutry" field', async () => {
        render(<Countries />);
        
        const loader = screen.getByTestId('country-loader');
        await waitForElementToBeRemoved(loader);
        
        expect(loader).not.toBeInTheDocument();
        
        const countryField = screen.getByTestId('country-field');
        expect(countryField).toBeInTheDocument();
        
        userEvent.click(countryField);

        const upRow = screen.getByTestId('up-row');
        expect(upRow).toBeInTheDocument();

        userEvent.click(countryField)
        expect(upRow).not.toBeInTheDocument();

        const downRow = screen.getByTestId('down-row');
        expect(downRow).toBeInTheDocument();
    });

    test('Check sorting on click "Total comfirmed" field', async () => {
        render(<Countries />);
        
        const loader = screen.getByTestId('country-loader');
        await waitForElementToBeRemoved(loader);
        
        expect(loader).not.toBeInTheDocument();
        
        const totalField = screen.getByTestId('total-field');
        expect(totalField).toBeInTheDocument();
        
        userEvent.click(totalField);

        const upRow = screen.getByTestId('up-row');
        expect(upRow).toBeInTheDocument();

        userEvent.click(totalField)
        expect(upRow).not.toBeInTheDocument();

        const downRow = screen.getByTestId('down-row');
        expect(downRow).toBeInTheDocument();
    });
   
});
