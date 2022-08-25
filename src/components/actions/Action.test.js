import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Action from './Action';
import ActionContextProvider from '../contexts/ActionContext';

test('Renders basic Note without delete icon in view mode', () => {
  const dummyProps = {
    title: 'Dummy title',
    body: 'Dummy body',
    editMode: false,
  };

  const { container } = render(
    <ActionContextProvider>
      <Action
        title={dummyProps.title}
        body={dummyProps.body}
        editMode={dummyProps.editMode}
      />
    </ActionContextProvider>
  );

  expect(container).toHaveTextContent(dummyProps.title);
  expect(container).toHaveTextContent(dummyProps.body);
  expect(screen.queryByTestId('delete-action-icon')).not.toBeInTheDocument();
});

test('Renders basic Note with delete icon in edit mode', () => {
  const dummyProps = {
    title: 'Dummy title',
    body: 'Dummy body',
    editMode: true,
  };

  const { container } = render(
    <ActionContextProvider>
      <Action
        title={dummyProps.title}
        body={dummyProps.body}
        editMode={dummyProps.editMode}
      />
    </ActionContextProvider>
  );

  expect(container).toHaveTextContent(dummyProps.title);
  expect(container).toHaveTextContent(dummyProps.body);
  screen.getByTestId('delete-action-icon');
});

test('Calls delete action for expected ID when clicking on delete icon', () => {
  const dummyProps = {
    title: 'Dummy title',
    body: 'Dummy body',
    editMode: true,
    id: 120,
  };

  const mockDeleteAction = jest.fn();

  render(
    <ActionContextProvider value={{ deleteAction: mockDeleteAction }}>
      <Action
        title={dummyProps.title}
        body={dummyProps.body}
        editMode={dummyProps.editMode}
        id={dummyProps.id}
      />
    </ActionContextProvider>
  );
  let deleteButton = screen.getByTestId('delete-action-icon');

  fireEvent.click(deleteButton);

  expect(mockDeleteAction).toHaveBeenCalledWith(dummyProps.id);
});
