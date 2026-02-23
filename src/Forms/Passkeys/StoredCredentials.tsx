import { useCallback, useState } from 'react';
import { deleteCredential, getStoredCredentials } from './utils';

export const StoredCredentials = () => {
  const [, setRefresh] = useState(0);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const credentials = getStoredCredentials();

  const handleDelete = useCallback((id: string) => {
    deleteCredential(id);
    setRefresh(prev => prev + 1);
    setDeleteConfirm(null);
  }, []);

  const handleClearAll = useCallback(() => {
    localStorage.removeItem('demoStoredCredentials');
    setRefresh(prev => prev + 1);
    setDeleteConfirm(null);
  }, []);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold underline">
          Stored Credentials (
          {credentials.length}
          )
        </h2>
        {credentials.length > 0 && (
          <button
            onClick={() => setDeleteConfirm('all')}
            className="bg-red-600 hover:bg-red-700 px-2 py-1 rounded text-sm text-white"
          >
            Clear All
          </button>
        )}
      </div>

      {deleteConfirm === 'all' && (
        <div className="bg-slate-900 border border-red-600 rounded-lg p-3 space-y-2">
          <p className="text-white">Are you sure you want to delete all credentials?</p>
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => setDeleteConfirm(null)}
              className="bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded text-sm text-white"
            >
              Cancel
            </button>
            <button
              onClick={handleClearAll}
              className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm text-white"
            >
              Delete All
            </button>
          </div>
        </div>
      )}

      {credentials.length === 0
        ? (
            <p className="text-slate-400 text-sm">No credentials stored yet</p>
          )
        : (
            <div className="space-y-3">
              {credentials.map(credential => (
                <div
                  key={credential.id}
                  className="bg-slate-900 border border-slate-700 rounded-lg p-3 space-y-2"
                >
                  {deleteConfirm === credential.id && (
                    <div className="bg-slate-800 border border-red-600 rounded p-2 mb-2">
                      <p className="text-white text-sm mb-2">Delete this credential?</p>
                      <div className="flex gap-2 justify-end">
                        <button
                          onClick={() => setDeleteConfirm(null)}
                          className="bg-slate-700 hover:bg-slate-600 px-2 py-1 rounded text-xs text-white"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => handleDelete(credential.id)}
                          className="bg-red-600 hover:bg-red-700 px-2 py-1 rounded text-xs text-white"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                  <div className="flex justify-between items-start">
                    <div className="space-y-1 flex-1">
                      <p className="font-semibold text-white">{credential.username}</p>
                      <p className="text-xs text-slate-400">
                        ID:
                        {' '}
                        {credential.credentialId.substring(0, 20)}
                        ...
                      </p>
                      <p className="text-xs text-slate-400">
                        Algorithm:
                        {' '}
                        {credential.algorithm}
                      </p>
                      <p className="text-xs text-slate-400">
                        Created:
                        {' '}
                        {new Date(credential.timestamp).toLocaleString()}
                      </p>
                    </div>
                    {deleteConfirm !== credential.id && (
                      <button
                        onClick={() => setDeleteConfirm(credential.id)}
                        className="bg-red-600 hover:bg-red-700 px-2 py-1 rounded text-xs text-white ml-2 whitespace-nowrap"
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
    </div>
  );
};
