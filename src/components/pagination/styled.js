import styled from "styled-components"

export const BoxPagination = styled.div`
    background-color: #fafafa;
    padding: 5px 0;

    .pagination {
        display: flex;
        justify-content: center;
        gap: 5px;
    }

    .page-item {
        font-size: 1.5rem;
        padding: 3px 10px;
        cursor: pointer;
        color: var(--primary);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .active {
        border: 1px solid var(--gray);
        color: #00a6f0;
        border-radius: 6px;
    }

    .disabled {
        color: #7dadc2;
        cursor: default;
    }

`