import express from "express";
import { z } from "zod";

export const zodMID: express.ErrorRequestHandler =
(error, req, res, next) => {
    if (error instanceof z.ZodError) {
        res.status(400).json({
            error: error.flatten()
        });
        return;
    } else if (error instanceof Error) {
        const err = error as Error & {
            statusCode?: number
        }
        res.status(err.statusCode ?? 400).json({
            message: error.message
        });
        return;
    }
    res.status(500).json({
        message: "Internal Server Error!"
    })
    next(error);
};


