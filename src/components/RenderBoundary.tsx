import { Component, type ErrorInfo, type ReactNode } from "react";

type BoundaryState = { error: Error | null };

export class RenderBoundary extends Component<{ children: ReactNode }, BoundaryState> {
  state: BoundaryState = { error: null };

  static getDerivedStateFromError(error: Error): BoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Portfolio render failed", error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return <main className="grid min-h-screen place-items-center bg-background px-6 text-foreground"><div className="max-w-xl"><p className="eyebrow mb-4">Render issue</p><h1 className="text-3xl font-bold">This page hit an error while loading.</h1><pre className="mt-5 whitespace-pre-wrap rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground">{this.state.error.message}</pre></div></main>;
    }
    return this.props.children;
  }
}
