import { emit, Event } from "./event-bus";

let open = false;

export function openSearch() {
    open = true;
    emit(Event.SearchOpened);
}

export function closeSearch() {
    open = false;
    emit(Event.SearchClosed);
}

export function toggleSearch() {
    if (open) {
        closeSearch();
    } else {
        openSearch();
    }
}

export function isSearchOpen(): boolean {
    return open;
}
